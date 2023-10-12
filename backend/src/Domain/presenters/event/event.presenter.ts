import { ApiProperty } from '@nestjs/swagger';
import { EventModel } from 'src/Domain/model/event/event.model';

export class EventPresenter {
  @ApiProperty()
  id: string;
  @ApiProperty()
  data: object;
  @ApiProperty()
  type: string;

  constructor(event: EventModel) {
    this.id = event.id;
    this.data = event.data;
    this.type = event.type;
  }
}
