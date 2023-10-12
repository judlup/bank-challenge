import { Body, Controller, Post } from '@nestjs/common';
import { LoginUseCase } from 'src/Application/usecases/auth/login/login.usecase';
import { LoginDto } from 'src/Domain/dtos/auth/login/login.dto';
import { LoginPresenter } from 'src/Domain/presenters/auth/login/login.presenter';

@Controller()
export class LoginController {
  constructor(private readonly loginUseCase: LoginUseCase) {}
  @Post()
  async login(@Body() loginDto: LoginDto): Promise<LoginPresenter> {
    const execute = await this.loginUseCase.execute(
      loginDto.email,
      loginDto.password,
    );
    return new LoginPresenter(execute);
  }
}
