import { Body, Controller, Post } from '@nestjs/common';
import { CreateAccountUseCase } from 'src/Application/usecases/account/createAccount.usecase';
import { AccountDto } from 'src/Domain/dtos/account/account.dto';

import { AccountPresenter } from 'src/Domain/presenters/account/account.presenter';
import { Account } from 'src/Infrastructure/entities/account/account.entity';
import { generateUUID } from 'src/Infrastructure/utils/uuid.util';

@Controller()
export class AccountController {
  constructor(private readonly createAccountUseCase: CreateAccountUseCase) {}

  @Post()
  async create(@Body() accountDto: AccountDto): Promise<AccountPresenter> {
    const account = new Account();
    account.id = generateUUID();
    account.name = accountDto.name;
    account.userId = accountDto.userId;
    account.accountNumber = accountDto.accountNumber;
    account.balance = accountDto.balance;

    const execute = await this.createAccountUseCase.execute(account);

    return new AccountPresenter(execute);
  }
}
