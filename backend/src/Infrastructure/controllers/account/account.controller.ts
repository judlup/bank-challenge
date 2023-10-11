import { Controller, Get } from '@nestjs/common';
import { GetAccountHealthUseCase } from 'src/Application/usecases/account/getHealth.usecase';
import { AccountRepository } from 'src/Infrastructure/repositories/account/account.repository';

@Controller()
export class AccountController {
  constructor(private accountRepository: AccountRepository) {}

  @Get()
  health(): string {
    const getAccountHealthUseCase = new GetAccountHealthUseCase(
      this.accountRepository,
    );
    return getAccountHealthUseCase.execute();
  }
}
