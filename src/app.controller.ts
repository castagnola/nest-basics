import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //@UseGuards(AuthGuard) // To protect a specific route
  getHello(): string {
    return this.appService.getHello();
  }
}
