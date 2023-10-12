import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AccountDto {
  @ApiPropertyOptional()
  readonly id?: string;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly userId: string;
  @ApiProperty()
  readonly accountNumber: string;
  @ApiProperty()
  readonly balance: number;
}
