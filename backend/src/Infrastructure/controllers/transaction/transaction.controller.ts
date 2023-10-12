import { Body, Controller, Post } from '@nestjs/common';
import { DepositUseCase } from 'src/Application/usecases/transaction/deposit.usecase';
import { WithdrawalUseCase } from 'src/Application/usecases/transaction/withdrawal.usecase';
import { TransactionDto } from 'src/Domain/dtos/transaction/transaction.dto';
import { TransactionPresenter } from 'src/Domain/presenters/transaction/transaction.presenter';
import { Transaction } from 'src/Infrastructure/entities/transaction/transaction.entity';
import { generateUUID } from 'src/Infrastructure/utils/uuid.util';

@Controller()
export class TransactionController {
  constructor(
    private readonly depositUseCase: DepositUseCase,
    private readonly withdrawalUseCase: WithdrawalUseCase,
  ) {}

  @Post('deposit')
  async deposit(
    @Body() transactionDto: TransactionDto,
  ): Promise<TransactionPresenter> {
    const transaction = new Transaction();
    transaction.id = generateUUID();
    transaction.destinationAccount = transactionDto.destinationAccount;
    transaction.originAccount = transactionDto.originAccount;
    transaction.userId = transactionDto.userId;
    transaction.type = 'deposit';
    transaction.amount = transactionDto.amount;
    transaction.description = transactionDto.description;

    const execute = await this.depositUseCase.execute(transaction);
    return new TransactionPresenter(execute);
  }

  @Post('withdrawal')
  async withdrawal(
    @Body() transactionDto: TransactionDto,
  ): Promise<TransactionPresenter> {
    const transaction = new Transaction();
    transaction.id = generateUUID();
    transaction.originAccount = transactionDto.originAccount;
    transaction.destinationAccount = '';
    transaction.userId = transactionDto.userId;
    transaction.type = 'withdrawal';
    transaction.amount = transactionDto.amount;
    transaction.description = transactionDto.description;

    const execute = await this.withdrawalUseCase.execute(transaction);
    return new TransactionPresenter(execute);
  }
}
