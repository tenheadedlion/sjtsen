import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(private readonly logger: LoggerService) {
    this.logger.setPrefix('AppService');
  }
  getHello(): string {
    this.logger.log('Hello World');
    return 'Hello World!';
  }
}
