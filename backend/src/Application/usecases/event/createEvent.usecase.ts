import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventModel } from 'src/Domain/model/event/event.model';
import { Event } from 'src/Infrastructure/entities/event/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreateEventUseCase {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async execute(event: EventModel): Promise<EventModel> {
    try {
      return await this.eventRepository.save(event);
    } catch (error) {
      console.error('An error has occurred:', error.message);
      throw new ConflictException(`An error has occurred: ${error.message}`);
    }
  }
}
