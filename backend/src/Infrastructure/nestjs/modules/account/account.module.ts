import { Module } from '@nestjs/common';
import { GetAccountHealthUseCase } from 'src/Application/usecases/account/getHealth.usecase';
import { AccountController } from 'src/Infrastructure/controllers/account/account.controller';
import { AccountRepository } from 'src/Infrastructure/repositories/account/account.repository';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [AccountRepository, GetAccountHealthUseCase],
})
export class AccountModule {}
