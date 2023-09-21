// Dada Ki Jay Ho

import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { WbSocketGateway } from 'src/wbsocket/wbsocket.gateway';

@Injectable()
export class WbSocketClientGreetingCronService {
  constructor(private wbsocketservice: WbSocketGateway) {}

  @Cron('*/5 * * * * *')
  greetEveryOne() {
    this.wbsocketservice.io.emit(
      'message',
      'Ram Ram Bhailog, time is: ' + Date.now(),
    );
    console.log('Greeted');
  }
}
