import { Controller, Get } from '@nestjs/common';
import { LoginService } from 'src/Infrastructure/services/auth/login/login.service';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Get()
  health(): string {
    return this.loginService.health();
  }
}
