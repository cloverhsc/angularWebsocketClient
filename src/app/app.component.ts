import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WebsocketService, ChatService]
})
export class AppComponent implements OnInit {
  title = 'app';
  private message = {
    author: 'Clover',
    message: 'this is a test message'
  };

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(
      (msg) => {
        console.log(msg);
        console.log(`Response from websocket: ${msg}`); }
    );
  }
  ngOnInit() {

  }

  sendMsg () {
    console.log('new message from client to websocket: ', this.message);
    this.chatService.messages.next(this.message);
    this.message.message = '';
  }
}
