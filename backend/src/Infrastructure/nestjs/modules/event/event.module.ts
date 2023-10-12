import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateEventUseCase } from 'src/Application/usecases/event/createEvent.usecase';
import { EnvironmentConfigModule } from 'src/Infrastructure/config/environment/environment.config.module';
import { Event } from 'src/Infrastructure/entities/event/event.entity';
import { EventController } from '../../../controllers/event/event/event.controller';

@Module({
  imports: [EnvironmentConfigModule, TypeOrmModule.forFeature([Event])],
  controllers: [EventController],
  providers: [CreateEventUseCase],
})
export class EventModule {}
