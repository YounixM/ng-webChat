import { Injectable } from "@angular/core";
import { WebSocketService } from "./webSocketService";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

const CHAT_URL = "wss://echo.websocket.org/";

export interface Message {
  author: string;
  message: string;
  sender: string;
}

@Injectable()
export class ChatService {
  public messages: Subject<Message>;
  public selectedContact = new Subject<any>();

  constructor(wsService: WebSocketService) {
    this.messages = <Subject<Message>>wsService.connect(CHAT_URL).pipe(
      map(
        (response: MessageEvent): Message => {
          let data = JSON.parse(response.data);
          return {
            author: data.author,
            message: data.message,
            sender: data.sender
          };
        }
      )
    );
  }
}
