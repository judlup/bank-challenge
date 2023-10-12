import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginUseCase } from 'src/Application/usecases/auth/login/login.usecase';
import { EnvironmentConfigModule } from 'src/Infrastructure/config/environment/environment.config.module';
import { EnvironmentConfigService } from 'src/Infrastructure/config/environment/environment.config.service';
import { LoginController } from 'src/Infrastructure/controllers/auth/login/login.controller';
import { User } from 'src/Infrastructure/entities/user/user.entity';
import { TokenService } from 'src/Infrastructure/utils/jwt/jwt.util';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [EnvironmentConfigModule],
      useFactory: (configService: EnvironmentConfigService) => ({
        secret: configService.getJwtSecret(),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [EnvironmentConfigService],
    }),
  ],
  controllers: [LoginController],
  providers: [LoginUseCase, TokenService],
})
export class LoginModule {}
