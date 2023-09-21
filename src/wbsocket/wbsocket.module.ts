// Dada Ki Jay Ho

import { Module } from '@nestjs/common';
import { WbSocketGateway } from './wbsocket.gateway';

@Module({
  providers: [WbSocketGateway],
  exports: [WbSocketGateway],
})
export class WbSocket {}
