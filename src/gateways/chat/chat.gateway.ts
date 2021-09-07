import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'events' })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() public server: Server;
  static clients: Array<string> = [];

  afterInit(server: Server) {
    console.log('Socket server started.');
  }

  handleConnection(@ConnectedSocket() socket: Socket, ...args: any[]) {
    const clientId = socket.id;
    ChatGateway.clients.push(clientId);

    console.log(`$Socket ID : ${clientId} 님이 연결되었습니다.`);
  }

  handleDisconnect(socket: Socket) {
    const clientId = socket.id;
    ChatGateway.clients = ChatGateway.clients.filter((id) => id !== clientId);

    console.log(`${clientId} disconnected.`);
  }

  @SubscribeMessage('message')
  sendmessage(@ConnectedSocket() socket: Socket, @MessageBody() data: string) {
    const clientId = socket.id;

    console.log(`${data} from ${clientId}`);
  }
}
