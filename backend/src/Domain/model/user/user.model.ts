import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserModel {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  role: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiPropertyOptional()
  token?: string;
}
