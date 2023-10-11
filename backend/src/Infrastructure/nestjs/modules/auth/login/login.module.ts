import { Module } from '@nestjs/common';
import { LoginController } from 'src/Infrastructure/controllers/auth/login/login.controller';
import { LoginService } from 'src/Infrastructure/services/auth/login/login.service';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
