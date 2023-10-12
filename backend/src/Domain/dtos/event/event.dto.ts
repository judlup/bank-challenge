import { ApiProperty } from '@nestjs/swagger';

export class EventDto {
  @ApiProperty()
  readonly data: object;
  @ApiProperty()
  readonly type: string;
}
