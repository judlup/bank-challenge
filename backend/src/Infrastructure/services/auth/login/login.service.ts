import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  health(): string {
    return 'Login is running!';
  }
}
