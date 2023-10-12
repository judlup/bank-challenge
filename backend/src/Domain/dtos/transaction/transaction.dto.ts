import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TransactionDto {
  @ApiProperty()
  readonly destinationAccount: string;
  @ApiProperty()
  readonly originAccount: string;
  @ApiProperty()
  readonly userId: string;
  @ApiPropertyOptional()
  readonly type?: string;
  @ApiProperty()
  readonly amount: number;
  @ApiProperty()
  readonly description: string;
}
