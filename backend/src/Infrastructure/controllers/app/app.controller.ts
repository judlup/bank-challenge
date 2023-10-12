import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from '../../services/app/app.service';

@ApiTags('Index')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Get hello',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
