import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionListPresenter } from 'src/Domain/presenters/transaction/transaction.presenter';
import { Account } from 'src/Infrastructure/entities/account/account.entity';
import { Transaction } from 'src/Infrastructure/entities/transaction/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GetTransactionsUseCase {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    // TO DO - create an endpoint to get the account by account number using a client
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async execute(
    accountNumber: string,
    page: number,
    limit: number,
  ): Promise<TransactionListPresenter> {
    try {
      const accountExist = await this.accountRepository.findOneByOrFail({
        accountNumber: accountNumber,
      });

      //Validate if account exists
      if (!accountExist) throw new NotFoundException(`Account not found`);

      const transactions = await this.transactionRepository
        .createQueryBuilder('transaction')
        .where('transaction.originAccount = :accountNumber', { accountNumber })
        .orWhere('transaction.destinationAccount = :accountNumber', {
          accountNumber,
        })
        .orderBy('transaction.created_at', 'DESC')
        .skip((page - 1) * limit)
        .take(limit)
        .getMany();

      const total = await this.transactionRepository
        .createQueryBuilder('transaction')
        .where(
          'transaction.originAccount = :accountNumber OR transaction.destinationAccount = :accountNumber',
          { accountNumber },
        )
        .getCount();

      return new TransactionListPresenter(transactions, page, limit, total);
    } catch (error) {
      console.error(`An error has occurred: ${error.name} - ${error.message}`);
      throw new NotFoundException(`Account not found`);
    }
  }
}
