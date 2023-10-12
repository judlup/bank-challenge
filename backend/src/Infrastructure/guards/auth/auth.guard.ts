import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { EnvironmentConfigService } from 'src/Infrastructure/config/environment/environment.config.service';
import { TokenService } from 'src/Infrastructure/utils/jwt/jwt.util';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private readonly environmentConfigService: EnvironmentConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.tokenService.verifyAsync(token, {
        secret: this.environmentConfigService.getJwtSecret(),
      });
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
