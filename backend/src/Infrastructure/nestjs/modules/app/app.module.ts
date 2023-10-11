import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { EnvironmentConfigService } from 'src/Infrastructure/config/environment/environment.config.service';
import { TypeormConfigModule } from 'src/Infrastructure/config/typeorm/typeorm.config.module';
import { AppController } from '../../../controllers/app/app.controller';
import { AppService } from '../../../services/app/app.service';
import { AccountModule } from '../account/account.module';
import { LoginModule } from '../auth/login/login.module';
import { TransactionModule } from '../transaction/transaction.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    AccountModule,
    TransactionModule,
    LoginModule,
    TypeormConfigModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
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
      {
        path: 'user',
        module: UserModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, EnvironmentConfigService],
})
export class AppModule {}
