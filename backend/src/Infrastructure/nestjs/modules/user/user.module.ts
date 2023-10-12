import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterUserUseCase } from 'src/Application/usecases/user/registerUser.usecase';
import { CreateAccountClient } from 'src/Infrastructure/clients/account/create/createAccount.client';
import { EnvironmentConfigModule } from 'src/Infrastructure/config/environment/environment.config.module';
import { EnvironmentConfigService } from 'src/Infrastructure/config/environment/environment.config.service';
import { UserController } from 'src/Infrastructure/controllers/user/user.controller';
import { User } from 'src/Infrastructure/entities/user/user.entity';

@Module({
  imports: [EnvironmentConfigModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    RegisterUserUseCase,
    CreateAccountClient,
    EnvironmentConfigService,
  ],
})
export class UserModule {}
