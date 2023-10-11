import { Controller, Get } from '@nestjs/common';
import { TransactionService } from 'src/Infrastructure/services/transaction/transaction.service';

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  health(): string {
    return this.transactionService.health();
  }
}
