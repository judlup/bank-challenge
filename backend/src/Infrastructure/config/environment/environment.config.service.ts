import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentConfigService {
  constructor(private configService: ConfigService) {}

  getDatabaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }

  getDatabasePort(): number {
    return this.configService.get<number>('DATABASE_PORT');
  }

  getDatabaseUser(): string {
    return this.configService.get<string>('DATABASE_USER');
  }

  getDatabasePassword(): string {
    return this.configService.get<string>('DATABASE_PASSWORD');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }

  getDatabaseSchema(): string {
    return this.configService.get<string>('DATABASE_SCHEMA');
  }

  getDatabaseSync(): boolean {
    return this.configService.get<boolean>('DATABASE_SYNCHRONIZE');
  }

  getRootResponse(): string {
    return this.configService.get<string>('ROOT_RESPONSE');
  }

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  getBalanceBonus(): number {
    return this.configService.get<number>('BALANCE_BONUS');
  }

  getAppHost(): string {
    return this.configService.get<string>('APP_HOST');
  }

  getAppPort(): number {
    return this.configService.get<number>('APP_PORT');
  }

  getAppTimeout(): number {
    return this.configService.get<number>('APP_TIMEOUT');
  }
}
