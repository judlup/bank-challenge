import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserUseCase } from 'src/Application/usecases/user/registerUser.usecase';
import { RegisterDto } from 'src/Domain/dtos/user/user.dto';
import { UserPresenter } from 'src/Domain/presenters/user/user.presenter';
import { User } from 'src/Infrastructure/entities/user/user.entity';
import { generateHash } from 'src/Infrastructure/utils/bcrypt.util';
import { generateUUID } from 'src/Infrastructure/utils/uuid.util';

@Controller()
export class UserController {
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<UserPresenter> {
    const user = new User();
    user.id = generateUUID();
    user.name = registerDto.name;
    user.email = registerDto.email;
    user.password = await generateHash(registerDto.password);
    user.phone = registerDto.phone;

    const execute = await this.registerUserUseCase.execute(user);

    return new UserPresenter(execute);
  }
}
