import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateAccountUseCase } from 'src/Application/usecases/account/createAccount.usecase';
import { GetBalanceByAccountNumberUseCase } from 'src/Application/usecases/account/getBalanceByAccountNumber.usecase';
import { AccountController } from 'src/Infrastructure/controllers/account/account.controller';
import { Account } from 'src/Infrastructure/entities/account/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [CreateAccountUseCase, GetBalanceByAccountNumberUseCase],
})
export class AccountModule {}
