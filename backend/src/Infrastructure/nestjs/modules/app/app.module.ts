import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from '../../../controllers/app/app.controller';
import { AppService } from '../../../services/app/app.service';
import { AccountModule } from '../account/account.module';
import { LoginModule } from '../auth/login/login.module';
import { TransactionModule } from '../transaction/transaction.module';

@Module({
  imports: [
    AccountModule,
    TransactionModule,
    LoginModule,
    RouterModule.register([
      {
        path: '',
        module: AppModule,
      },
      {
        path: 'account',
        module: AccountModule,
      },
      {
        path: 'transaction',
        module: TransactionModule,
      },
      {
        path: 'login',
        module: LoginModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
