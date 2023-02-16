import { Injectable, Logger } from '@nestjs/common';
import { RequestService } from './request.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private requesService: RequestService) {}
  getHello(): string {
    const userId = this.requesService.getUserId();
    this.logger.log('GetHello userId: ', userId);
    return 'Hello World!';
  }
}
