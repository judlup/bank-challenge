import { Module } from '@nestjs/common';
import { UserController } from 'src/Infrastructure/controllers/user/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
