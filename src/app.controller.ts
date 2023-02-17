import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //@UseInterceptors(LoggingInterceptor)
  //@UseGuards(AuthGuard) // To protect a specific route
  getHello(): string {
    return this.appService.getHello();
  }
}
