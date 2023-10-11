import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from 'src/Domain/model/user/user.model';
import { User } from 'src/Infrastructure/entities/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterUserUseCase {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async execute(user: UserModel): Promise<UserModel> {
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      console.error('An error has occurred:', error.message);
      throw new ConflictException(`An error has occurred: ${error.message}`);
    }
  }
}
