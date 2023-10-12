import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateAccountUseCase } from 'src/Application/usecases/account/createAccount.usecase';
import { GetBalanceByAccountNumberUseCase } from 'src/Application/usecases/account/getBalanceByAccountNumber.usecase';
import { AccountDto } from 'src/Domain/dtos/account/account.dto';

import { AccountPresenter } from 'src/Domain/presenters/account/account.presenter';
import { CreateEventClient } from 'src/Infrastructure/clients/event/create/createEventClient';
import { Account } from 'src/Infrastructure/entities/account/account.entity';
import { Event } from 'src/Infrastructure/entities/event/event.entity';
import { generateUUID } from 'src/Infrastructure/utils/uuid.util';

@Controller()
export class AccountController {
  constructor(
    private readonly createAccountUseCase: CreateAccountUseCase,
    private readonly getBalanceByAccountNumberUseCase: GetBalanceByAccountNumberUseCase,
    private readonly createEventClient: CreateEventClient,
  ) {}

  @Post()
  async create(@Body() accountDto: AccountDto): Promise<AccountPresenter> {
    const account = new Account();
    account.id = generateUUID();
    account.name = accountDto.name;
    account.userId = accountDto.userId;
    account.accountNumber = accountDto.accountNumber;
    account.balance = accountDto.balance;

    const execute = await this.createAccountUseCase.execute(account);

    // TO DO: Migrate to event sourcing with Kafka
    const eventData = new Event();
    eventData.data = execute;
    eventData.type = 'create_account';
    const createEvent = await this.createEventClient.createEvent(eventData);
    console.log(
      `AccountController: A new account has been created: ${execute.accountNumber} for user ${execute.id} with balance ${execute.balance} and event ${createEvent.id}`,
    );

    return new AccountPresenter(execute);
  }

  @Get(':accountNumber/balance')
  async getBalanceByAccountNumber(
    @Param('accountNumber') accountNumber: string,
  ): Promise<number> {
    return await this.getBalanceByAccountNumberUseCase.execute(accountNumber);
  }
}
