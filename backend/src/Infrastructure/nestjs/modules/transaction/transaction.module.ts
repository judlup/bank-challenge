import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositUseCase } from 'src/Application/usecases/transaction/deposit.usecase';
import { TransferUseCase } from 'src/Application/usecases/transaction/transfer.usecase';
import { WithdrawalUseCase } from 'src/Application/usecases/transaction/withdrawal.usecase';
import { TransactionController } from 'src/Infrastructure/controllers/transaction/transaction.controller';
import { Account } from 'src/Infrastructure/entities/account/account.entity';
import { Transaction } from 'src/Infrastructure/entities/transaction/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Account])],
  controllers: [TransactionController],
  providers: [DepositUseCase, TransferUseCase, WithdrawalUseCase],
})
export class TransactionModule {}
