import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserUseCase } from 'src/Application/usecases/user/registerUser.usecase';
import { RegisterDto } from 'src/Domain/dtos/user/user.dto';
import { UserPresenter } from 'src/Domain/presenters/user/user.presenter';
import { CreateAccountClient } from 'src/Infrastructure/clients/account/create/createAccount.client';
import { EnvironmentConfigService } from 'src/Infrastructure/config/environment/environment.config.service';
import { Account } from 'src/Infrastructure/entities/account/account.entity';
import { User } from 'src/Infrastructure/entities/user/user.entity';
import { generateHash } from 'src/Infrastructure/utils/bcrypt.util';
import { generateUUID } from 'src/Infrastructure/utils/uuid.util';

@Controller()
export class UserController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly createAccountClient: CreateAccountClient,
    private readonly environmentConfigService: EnvironmentConfigService,
  ) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<UserPresenter> {
    const user = new User();
    user.id = generateUUID();
    user.name = registerDto.name;
    user.email = registerDto.email;
    user.password = await generateHash(registerDto.password);
    user.phone = registerDto.phone;

    const execute = await this.registerUserUseCase.execute(user);

    // Create account
    const account = new Account();
    account.name = 'My account';
    account.userId = execute.id;
    // The account number is the user's phone number
    account.accountNumber = execute.phone;
    // A welcome bonus is added to the account
    account.balance = this.environmentConfigService.getBalanceBonus();

    // TO DO: Migrate to event sourcing with Kafka
    const newAccount = await this.createAccountClient.createAccount(account);
    console.log(
      `UserController: A new account has been created: ${newAccount.id} for user ${execute.id} with balance ${newAccount.balance} and account number ${newAccount.accountNumber} and email ${execute.email}`,
    );

    return new UserPresenter(execute);
  }
}
