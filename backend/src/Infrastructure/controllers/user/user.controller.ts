import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  constructor() {} // private userRepository: UserRepository

  @Get()
  health(): string {
    // const getUserHealthUseCase = new GetUserHealthUseCase(
    //   this.userRepository,
    // );
    // return getUserHealthUseCase.execute();
    return 'User health is OK!';
  }

  // pendiente crear el endpoint para "register"
}
