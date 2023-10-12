import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AccountDto } from 'src/Domain/dtos/account/account.dto';
import { AccountPresenter } from 'src/Domain/presenters/account/account.presenter';
import { EnvironmentConfigService } from 'src/Infrastructure/config/environment/environment.config.service';
import { generateUUID } from 'src/Infrastructure/utils/uuid.util';

@Injectable()
export class CreateAccountClient {
  constructor(
    private readonly environmentConfigService: EnvironmentConfigService,
  ) {}
  async createAccount(accountDto: AccountDto): Promise<AccountPresenter> {
    try {
      // TODO: Implement axios global client
      const HOST = this.environmentConfigService.getAppHost();
      const PORT = this.environmentConfigService.getAppPort();
      const TIMEOUT = this.environmentConfigService.getAppTimeout();

      const options = {
        method: 'POST',
        url: `http://${HOST}:${PORT}/account`,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: TIMEOUT,
        data: {
          id: generateUUID(),
          name: accountDto.name,
          userId: accountDto.userId,
          accountNumber: accountDto.accountNumber,
          balance: accountDto.balance,
        },
      };
      const response = await axios.request(options);
      return new AccountPresenter(response.data);
    } catch (error) {
      console.log(`An error has occured: ${error.message}`);
      throw error;
    }
  }
}
