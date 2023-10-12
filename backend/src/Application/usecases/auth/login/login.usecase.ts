import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from 'src/Domain/model/user/user.model';
import { User } from 'src/Infrastructure/entities/user/user.entity';
import { compareHash } from 'src/Infrastructure/utils/bcrypt.util';
import { TokenService } from 'src/Infrastructure/utils/jwt/jwt.util';
import { Repository } from 'typeorm';

@Injectable()
export class LoginUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly tokenService: TokenService,
  ) {}

  async execute(email: string, password: string): Promise<UserModel> {
    try {
      const user = await this.userRepository.findOneByOrFail({ email: email });
      if (await compareHash(password, user.password)) {
        const payload = { email: user.email, sub: user.id, role: user.role };
        delete user.password;
        user.token = await this.tokenService.generateJwt(payload);
        return user;
      } else {
        throw new UnauthorizedException('Invalid email or password');
      }
    } catch (error) {
      console.error(`An error has occurred: ${error.name} - ${error.message}`);
      throw new UnauthorizedException(
        `An error has occurred: ${error.message}`,
      );
    }
  }
}
