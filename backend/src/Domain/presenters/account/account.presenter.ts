import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AccountModel } from 'src/Domain/model/account/account.model';

export class AccountPresenter {
  @ApiPropertyOptional()
  id?: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  accountNumber: string;
  @ApiProperty()
  balance: number;
  @ApiProperty()
  status: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
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
