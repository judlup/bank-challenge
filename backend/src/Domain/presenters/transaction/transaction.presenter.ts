import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TransactionModel } from 'src/Domain/model/transaction/transaction.model';

export class TransactionPresenter {
  @ApiProperty()
  id: string;
  @ApiPropertyOptional()
  destinationAccount?: string;
  @ApiProperty()
  originAccount: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  amount: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;

  constructor(transaction: TransactionModel) {
    this.id = transaction.id;
    this.destinationAccount = transaction.destinationAccount;
    this.originAccount = transaction.originAccount;
    this.userId = transaction.userId;
    this.type = transaction.type;
    this.amount = transaction.amount;
    this.description = transaction.description;
    this.status = transaction.status;
    this.created_at = transaction.created_at;
    this.updated_at = transaction.updated_at;
  }
}

export class TransactionListPresenter {
  @ApiProperty()
  results: TransactionPresenter[];
  total: number;
  @ApiProperty()
  page: number;
  @ApiProperty()
  limit: number;
  @ApiProperty()
  totalPages: number;
  @ApiProperty()
  hasPrevPage: boolean;
  @ApiProperty()
  hasNextPage: boolean;

  constructor(
    results: TransactionPresenter[],
    page: number,
    limit: number,
    total: number,
  ) {
    this.results = results;
    this.total = total;
    this.page = Number(page);
    this.limit = Number(limit);
    this.totalPages = Math.ceil(this.total / limit);
    this.hasPrevPage = this.page > 1;
    this.hasNextPage = this.page < this.totalPages;
  }
}
