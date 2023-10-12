import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { EventDto } from 'src/Domain/dtos/event/event.dto';
import { EventPresenter } from 'src/Domain/presenters/event/event.presenter';
import { EnvironmentConfigService } from 'src/Infrastructure/config/environment/environment.config.service';

@Injectable()
export class CreateEventClient {
  constructor(
    private readonly environmentConfigService: EnvironmentConfigService,
  ) {}
  async createEvent(eventDto: EventDto): Promise<EventPresenter> {
    try {
      // TODO: Implement axios global client
      const HOST = this.environmentConfigService.getAppHost();
      const PORT = this.environmentConfigService.getAppPort();
      const options = {
        method: 'POST',
        url: `http://${HOST}:${PORT}/event`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          data: eventDto.data,
          type: eventDto.type,
        },
      };

      const response = await axios.request(options);
      return new EventPresenter(response.data);
    } catch (error) {
      console.log(`CreateEventClient: An error has occured: ${error.message}`);
      throw error;
    }
  }
}
