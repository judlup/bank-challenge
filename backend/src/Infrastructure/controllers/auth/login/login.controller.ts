import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUseCase } from 'src/Application/usecases/auth/login/login.usecase';
import { LoginDto } from 'src/Domain/dtos/auth/login/login.dto';
import { LoginPresenter } from 'src/Domain/presenters/auth/login/login.presenter';

@ApiTags('Login')
@Controller()
export class LoginController {
  constructor(private readonly loginUseCase: LoginUseCase) {}
  @Post()
  @ApiResponse({
    status: 200,
    description: 'Login successfullys',
    type: LoginPresenter,
  })
  async login(@Body() loginDto: LoginDto): Promise<LoginPresenter> {
    const execute = await this.loginUseCase.execute(
      loginDto.email,
      loginDto.password,
    );
    return new LoginPresenter(execute);
  }
}
