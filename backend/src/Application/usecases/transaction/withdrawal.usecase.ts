import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionModel } from 'src/Domain/model/transaction/transaction.model';
import { Account } from 'src/Infrastructure/entities/account/account.entity';
import { Transaction } from 'src/Infrastructure/entities/transaction/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WithdrawalUseCase {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactioRepository: Repository<Transaction>,
    // TO DO - create an endpoint to get the account by account number using a client
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async execute(transaction: TransactionModel): Promise<TransactionModel> {
    try {
      if (transaction.destinationAccount) {
        throw new ConflictException('The destination account must be empty');
      }

      // Validate if the account exists (origin)
      const originExists = await this.accountRepository.findOne({
        where: { accountNumber: transaction.originAccount },
      });

      if (!originExists) {
        throw new ConflictException('The origin account does not exist');
      }

      // Validate if user is the owner of the account
      if (originExists.userId !== transaction.userId) {
        throw new ConflictException(
          'The user is not the owner of the origin account',
        );
      }

      // Validate if the origin account has enough balance
      if (originExists.balance < transaction.amount) {
        throw new ConflictException(
          'The origin account does not have enough balance',
        );
      }

      // Update the origin account
      originExists.balance -= transaction.amount;
      await this.accountRepository.save(originExists);

      // Save the transaction
      return await this.transactioRepository.save(transaction);
    } catch (error) {
      console.error('An error has occurred:', error.message);
      throw new ConflictException(`An error has occurred: ${error.message}`);
    }
  }
}
