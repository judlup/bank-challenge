import { Module } from '@nestjs/common';
import { TransactionController } from 'src/Infrastructure/controllers/transaction/transaction.controller';
import { TransactionService } from 'src/Infrastructure/services/transaction/transaction.service';

@Module({
  imports: [],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
