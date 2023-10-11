import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountRepository {
  health(): string {
    return 'Account repository is running!';
  }
}
