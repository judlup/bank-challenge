import { AccountModel } from 'src/Domain/model/account/account.model';

export class AccountPresenter {
  id?: string;
  name: string;
  userId: string;
  accountNumber: string;
  balance: number;
  status: string;
  created_at: Date;
  updated_at: Date;

  constructor(account: AccountModel) {
    this.id = account.id;
    this.name = account.name;
    this.accountNumber = account.accountNumber;
    this.balance = account.balance;
    this.status = account.status;
    this.created_at = account.created_at;
    this.updated_at = account.updated_at;
  }
}
