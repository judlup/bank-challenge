import { Injectable } from '@nestjs/common';
// import { AccountRepository } from 'src/Infrastructure/repositories/account/account.repository';

@Injectable()
export class GetAccountHealthUseCase {
  constructor() {} //private readonly accountRepository: AccountRepository
  execute() {
    return "it's working!";
  }
}
