import { Body, Controller, Post } from '@nestjs/common';
import { CreateEventUseCase } from 'src/Application/usecases/event/createEvent.usecase';
import { EventDto } from 'src/Domain/dtos/event/event.dto';
import { EventPresenter } from 'src/Domain/presenters/event/event.presenter';
import { Event } from 'src/Infrastructure/entities/event/event.entity';
import { generateUUID } from 'src/Infrastructure/utils/uuid.util';

@Controller()
export class EventController {
  constructor(private readonly createEventUseCase: CreateEventUseCase) {}

  @Post()
  async create(@Body() eventDto: EventDto): Promise<EventPresenter> {
    const event = new Event();
    event.id = generateUUID();
    event.data = eventDto.data;
    event.type = eventDto.type;

    return new EventPresenter(await this.createEventUseCase.execute(event));
  }
}
