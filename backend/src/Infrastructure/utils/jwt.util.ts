import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async generateJwt(payload: any): Promise<string> {
    return await this.jwtService.signAsync(payload);
  }
}
