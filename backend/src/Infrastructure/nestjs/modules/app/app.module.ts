import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { EnvironmentConfigModule } from 'src/Infrastructure/config/environment/environment.config.module';
import { EnvironmentConfigService } from 'src/Infrastructure/config/environment/environment.config.service';
import { TypeormConfigModule } from 'src/Infrastructure/config/typeorm/typeorm.config.module';
import { AuthGuard } from 'src/Infrastructure/guards/auth/auth.guard';
import { TokenService } from 'src/Infrastructure/utils/jwt/jwt.util';
import { AppController } from '../../../controllers/app/app.controller';
import { AppService } from '../../../services/app/app.service';
import { AccountModule } from '../account/account.module';
import { LoginModule } from '../auth/login/login.module';
import { EventModule } from '../event/event.module';
import { TransactionModule } from '../transaction/transaction.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    AccountModule,
    TransactionModule,
    LoginModule,
    UserModule,
    EventModule,
    TypeormConfigModule,
    JwtModule.registerAsync({
      imports: [EnvironmentConfigModule],
      useFactory: (configService: EnvironmentConfigService) => ({
        secret: configService.getJwtSecret(),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [EnvironmentConfigService],
    }),
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
      {
        path: 'event',
        module: EventModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, EnvironmentConfigService, AuthGuard, TokenService],
})
export class AppModule {}
