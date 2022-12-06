import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { createLoggerProviders } from './logger.providers';

const loggerProviders = createLoggerProviders();

@Module({
  providers: [LoggerService, ...loggerProviders],
  exports: [LoggerService, ...loggerProviders],
})
export class LoggerModule {}
