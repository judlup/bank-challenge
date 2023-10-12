import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/Infrastructure/entities/account/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetBalanceByAccountNumberUseCase {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async execute(accountNumber: string): Promise<number> {
    try {
      const account = await this.accountRepository.findOneByOrFail({
        accountNumber,
      });
      return account.balance;
    } catch (error) {
      console.error(`An error has occurred: ${error.name} - ${error.message}`);
      throw new NotFoundException(`Account not found`);
    }
  }
}
