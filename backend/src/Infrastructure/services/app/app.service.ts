import { Injectable } from '@nestjs/common';
import { EnvironmentConfigService } from 'src/Infrastructure/config/environment/environment.config.service';

@Injectable()
export class AppService {
  constructor(
    private readonly environmentConfigService: EnvironmentConfigService,
  ) {}
  getHello(): string {
    return this.environmentConfigService.getRootResponse();
  }
}
