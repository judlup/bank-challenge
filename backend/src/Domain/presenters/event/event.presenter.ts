import { EventModel } from 'src/Domain/model/event/event.model';

export class EventPresenter {
  id: string;
  data: object;
  type: string;

  constructor(event: EventModel) {
    this.id = event.id;
    this.data = event.data;
    this.type = event.type;
  }
}
