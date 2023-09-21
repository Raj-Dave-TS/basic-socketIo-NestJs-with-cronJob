// Dada Ki Jay Ho

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WbSocket } from './wbsocket/wbsocket.module';
import { ScheduleModule } from '@nestjs/schedule';
import { WbSocketClientGreetingCronService } from './cron-jobs/wbsocket-client-greeting.service';

@Module({
  imports: [WbSocket, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, WbSocketClientGreetingCronService],
})
export class AppModule {}
