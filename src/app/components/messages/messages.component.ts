import { Component, OnInit, Input } from "@angular/core";
import { ChatService } from "../../services/chat.service";
import { MessagesService } from "../../services/messages.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent {
  url = "wss://echo.websocket.org/";
  messagesArr = [];
  newMessage: string;

  selectedContact = null;

  constructor(
    private chatService: ChatService,
    private _messageService: MessagesService
  ) {
    chatService.messages.subscribe(msg => {
      msg.author = "websocket";
      this._messageService.chatsStudData[msg.sender].messages.push(msg);
    });

    chatService.selectedContact.subscribe(contact => {
      this.selectedContact = contact;
      let contactMessages = this._messageService.chatsStudData[
        this.selectedContact.phoneNumber
      ];

      this.messagesArr = contactMessages ? contactMessages.messages : [];

      console.log(this.messagesArr);
      this.newMessage = "";
    });
  }

  sendMessage(event) {
    if (event && event.keyCode !== 13) {
      return;
    }

    this.formatAndSend();
    // if (event && (event["keyCode"] === 13 || event === "click")) {
    //   this.formatAndSend();
    // }
  }

  private formatAndSend() {
    let message = {
      author: "Me",
      message: this.newMessage,
      sender: this.selectedContact.phoneNumber
    };
    if (message.message) {
      // message.message = this.newMessage;
      this._messageService.chatsStudData[
        this.selectedContact.phoneNumber
      ].messages.push(message);
      // this.messagesArr.push(message);
      this.chatService.messages.next(message);
    }
    this.newMessage = "";
  }
}
