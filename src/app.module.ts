import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'PORT',
      useValue: 3003,
    },
  ],
})
export class AppModule {}
