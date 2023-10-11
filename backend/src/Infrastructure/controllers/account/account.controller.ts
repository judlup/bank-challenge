import { Controller, Get } from '@nestjs/common';
import { GetAccountHealthUseCase } from 'src/Application/usecases/account/getHealth.usecase';

@Controller()
export class AccountController {
  constructor() {}

  @Get()
  health(): string {
    const getAccountHealthUseCase = new GetAccountHealthUseCase();
    return getAccountHealthUseCase.execute();
  }
}
