import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterUserUseCase } from 'src/Application/usecases/user/registerUser.usecase';
import { UserController } from 'src/Infrastructure/controllers/user/user.controller';
import { User } from 'src/Infrastructure/entities/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [RegisterUserUseCase],
})
export class UserModule {}
