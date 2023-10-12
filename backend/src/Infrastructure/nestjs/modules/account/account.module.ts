import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateAccountUseCase } from 'src/Application/usecases/account/createAccount.usecase';
import { GetBalanceByAccountNumberUseCase } from 'src/Application/usecases/account/getBalanceByAccountNumber.usecase';
import { CreateEventClient } from 'src/Infrastructure/clients/event/create/createEventClient';
import { EnvironmentConfigModule } from 'src/Infrastructure/config/environment/environment.config.module';
import { AccountController } from 'src/Infrastructure/controllers/account/account.controller';
import { Account } from 'src/Infrastructure/entities/account/account.entity';

@Module({
  imports: [EnvironmentConfigModule, TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [
    CreateEventClient,
    CreateAccountUseCase,
    GetBalanceByAccountNumberUseCase,
  ],
})
export class AccountModule {}
