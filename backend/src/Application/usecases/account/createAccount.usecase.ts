import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountModel } from 'src/Domain/model/account/account.model';
import { Account } from 'src/Infrastructure/entities/account/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreateAccountUseCase {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async execute(account: AccountModel): Promise<AccountModel> {
    try {
      return await this.accountRepository.save(account);
    } catch (error) {
      console.error('An error has occurred:', error.message);
      throw new InternalServerErrorException(
        `An error has occurred: ${error.message}`,
      );
    }
  }
}
