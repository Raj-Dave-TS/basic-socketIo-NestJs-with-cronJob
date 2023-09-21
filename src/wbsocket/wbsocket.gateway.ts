// Dada Ki Jay Ho

import { Inject } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'events' })
export class WbSocketGateway implements OnGatewayConnection, OnGatewayInit {
  // constructor(@Inject(WebSocketServer) private io: Server) {}
  // both above and below is same, but above code is giving error :)
  @WebSocketServer()
  io: Server;

  handleConnection(client: any, ...args: any[]) {
    console.log('Client Connected !!!');
  }
  afterInit(server: any) {
    console.log('Web socket server is up and running ...');
  }
  @SubscribeMessage('message')
  handleMessages(
    @MessageBody() body: string,
    @ConnectedSocket() clientSocket: Socket,
  ) {
    console.log('MESSAGE : -----> ', body);
    this.io.emit('message', body);
    // clientSocket.broadcast.emit('message', body);
    return body;
  }

  @SubscribeMessage('events')
  handleEvent(
    @MessageBody() body: string,
    @ConnectedSocket() clientSocket: Socket,
  ) {
    console.log('EVENT : ----> ', body);
    return body;
  }
}
