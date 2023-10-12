import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositUseCase } from 'src/Application/usecases/transaction/deposit.usecase';
import { GetTransactionsUseCase } from 'src/Application/usecases/transaction/getTransactions.usecase';
import { TransferUseCase } from 'src/Application/usecases/transaction/transfer.usecase';
import { WithdrawalUseCase } from 'src/Application/usecases/transaction/withdrawal.usecase';
import { CreateEventClient } from 'src/Infrastructure/clients/event/create/createEventClient';
import { EnvironmentConfigModule } from 'src/Infrastructure/config/environment/environment.config.module';
import { EnvironmentConfigService } from 'src/Infrastructure/config/environment/environment.config.service';
import { TransactionController } from 'src/Infrastructure/controllers/transaction/transaction.controller';
import { Account } from 'src/Infrastructure/entities/account/account.entity';
import { Transaction } from 'src/Infrastructure/entities/transaction/transaction.entity';
import { AuthGuard } from 'src/Infrastructure/guards/auth/auth.guard';
import { LargeDepositMiddleware } from 'src/Infrastructure/middlewares/transaction/largeDeposit.middleware';
import { TokenService } from 'src/Infrastructure/utils/jwt/jwt.util';

@Module({
  imports: [
    EnvironmentConfigModule,
    JwtModule.registerAsync({
      imports: [EnvironmentConfigModule],
      useFactory: (configService: EnvironmentConfigService) => ({
        secret: configService.getJwtSecret(),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [EnvironmentConfigService],
    }),
    TypeOrmModule.forFeature([Transaction, Account]),
  ],
  controllers: [TransactionController],
  providers: [
    GetTransactionsUseCase,
    DepositUseCase,
    TransferUseCase,
    WithdrawalUseCase,
    CreateEventClient,
    AuthGuard,
    TokenService,
  ],
})
export class TransactionModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LargeDepositMiddleware)
      .forRoutes({ path: 'transaction/deposit', method: RequestMethod.POST });
  }
}
