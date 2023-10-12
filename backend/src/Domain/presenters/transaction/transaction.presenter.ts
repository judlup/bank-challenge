import { TransactionModel } from 'src/Domain/model/transaction/transaction.model';

export class TransactionPresenter {
  id: string;
  destinationAccount?: string;
  originAccount: string;
  userId: string;
  type: string;
  amount: number;
  description: string;
  status: string;
  created_at: Date;
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
  results: TransactionPresenter[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasPrevPage: boolean;
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
