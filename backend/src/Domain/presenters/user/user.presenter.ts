import { ApiProperty } from '@nestjs/swagger';
import { UserModel } from 'src/Domain/model/user/user.model';

export class UserPresenter {
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  role: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;

  constructor(user: UserModel) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.role = user.role;
    this.status = user.status;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
  }
}
