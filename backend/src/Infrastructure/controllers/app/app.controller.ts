import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Infrastructure/guards/auth/auth.guard';
import { AppService } from '../../services/app/app.service';

@ApiTags('Index')
@ApiBearerAuth()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Get()
  @ApiResponse({
    status: 201,
    description: 'Get hello',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
