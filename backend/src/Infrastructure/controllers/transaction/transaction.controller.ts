import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DepositUseCase } from 'src/Application/usecases/transaction/deposit.usecase';
import { GetTransactionsUseCase } from 'src/Application/usecases/transaction/getTransactions.usecase';
import { TransferUseCase } from 'src/Application/usecases/transaction/transfer.usecase';
import { WithdrawalUseCase } from 'src/Application/usecases/transaction/withdrawal.usecase';
import { TransactionDto } from 'src/Domain/dtos/transaction/transaction.dto';
import {
  TransactionListPresenter,
  TransactionPresenter,
} from 'src/Domain/presenters/transaction/transaction.presenter';
import { Transaction } from 'src/Infrastructure/entities/transaction/transaction.entity';
import { generateUUID } from 'src/Infrastructure/utils/uuid.util';

@Controller()
export class TransactionController {
  constructor(
    private readonly transferUseCase: TransferUseCase,
    private readonly withdrawalUseCase: WithdrawalUseCase,
    private readonly depositUseCase: DepositUseCase,
    private readonly getTransactionsUseCase: GetTransactionsUseCase,
  ) {}

  @Post('transfer')
  async transfer(
    @Body() transactionDto: TransactionDto,
  ): Promise<TransactionPresenter> {
    const transaction = new Transaction();
    transaction.id = generateUUID();
    transaction.destinationAccount = transactionDto.destinationAccount;
    transaction.originAccount = transactionDto.originAccount;
    transaction.userId = transactionDto.userId;
    transaction.type = 'transfer';
    transaction.amount = transactionDto.amount;
    transaction.description = transactionDto.description;

    const execute = await this.transferUseCase.execute(transaction);
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

  @Post('deposit')
  async deposit(
    @Body() transactionDto: TransactionDto,
  ): Promise<TransactionPresenter> {
    const transaction = new Transaction();
    transaction.id = generateUUID();
    transaction.originAccount = '';
    transaction.destinationAccount = transactionDto.destinationAccount;
    transaction.userId = transactionDto.userId;
    transaction.type = 'deposit';
    transaction.amount = transactionDto.amount;
    transaction.description = 'deposit';

    const execute = await this.depositUseCase.execute(transaction);
    return new TransactionPresenter(execute);
  }

  @Get(':accountNumber')
  async transactions(
    @Param() params: { accountNumber: string },
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<TransactionListPresenter> {
    const execute = await this.getTransactionsUseCase.execute(
      params.accountNumber,
      page,
      limit,
    );
    return execute;
  }
}
