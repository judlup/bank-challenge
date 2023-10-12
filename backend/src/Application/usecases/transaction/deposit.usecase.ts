import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionModel } from 'src/Domain/model/transaction/transaction.model';
import { Account } from 'src/Infrastructure/entities/account/account.entity';
import { Transaction } from 'src/Infrastructure/entities/transaction/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepositUseCase {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactioRepository: Repository<Transaction>,
    // TO DO - create an endpoint to get the account by account number using a client
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async execute(transaction: TransactionModel): Promise<TransactionModel> {
    try {
      if (transaction.originAccount === transaction.destinationAccount) {
        throw new ConflictException(
          'The origin and destination account cannot be the same',
        );
      }

      // Validate if the accounts exists (destination and origin)
      const destinationExists = await this.accountRepository.findOne({
        where: { accountNumber: transaction.destinationAccount },
      });
      const originExists = await this.accountRepository.findOne({
        where: { accountNumber: transaction.originAccount },
      });

      if (!destinationExists || !originExists) {
        throw new ConflictException(
          'The origin or destination account does not exist',
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

      // Update the destination account
      destinationExists.balance += transaction.amount;
      await this.accountRepository.save(destinationExists);

      if (transaction.amount >= 10000) {
        console.warn(
          `The transaction ${transaction.id} was made by ${transaction.userId} with amount ${transaction.amount} and description ${transaction.description}`,
        );
      }

      // Save the transaction
      return await this.transactioRepository.save(transaction);
    } catch (error) {
      console.error('An error has occurred:', error.message);
      throw new ConflictException(`An error has occurred: ${error.message}`);
    }
  }
}
