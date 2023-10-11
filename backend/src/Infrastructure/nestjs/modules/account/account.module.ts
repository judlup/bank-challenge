import { Module } from '@nestjs/common';
import { GetAccountHealthUseCase } from 'src/Application/usecases/account/getHealth.usecase';
import { AccountController } from 'src/Infrastructure/controllers/account/account.controller';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [GetAccountHealthUseCase],
})
export class AccountModule {}
