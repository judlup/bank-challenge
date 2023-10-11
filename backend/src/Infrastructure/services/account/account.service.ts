import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  health(): string {
    return 'Account service is running!';
  }
}
