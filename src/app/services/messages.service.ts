import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  public chatsStudData = {
    "7899066282": {
      messages: [
        {
          author: "Me",
          message: "Test 1"
        },
        {
          author: "websocket",
          message: "Test 1"
        },
        {
          author: "Me",
          message: "Test 2"
        },
        {
          author: "websocket",
          message: "Test 2"
        },
        {
          author: "Me",
          message: "Test 3"
        },
        {
          author: "websocket",
          message: "Test 3"
        },
        {
          author: "Me",
          message: "Test 4"
        },
        {
          author: "websocket",
          message: "Test 4"
        },
        {
          author: "Me",
          message: "Test 5"
        },
        {
          author: "websocket",
          message: "Test 5"
        },
        {
          author: "Me",
          message: "Test 6"
        },
        {
          author: "websocket",
          message: "Test 6"
        },
        {
          author: "Me",
          message: "Test 7"
        },
        {
          author: "websocket",
          message: "Test 7"
        },
        {
          author: "Me",
          message: "Test 8"
        },
        {
          author: "websocket",
          message: "Test 8"
        },
        {
          author: "Me",
          message: "Test 9"
        },
        {
          author: "websocket",
          message: "Test 9"
        }
      ]
    },
    "5555555555": {
      messages: [
        {
          author: "Me",
          message: "Test 555"
        },
        {
          author: "websocket",
          message: "Test 555"
        },
        {
          author: "Me",
          message: "Test 555"
        },
        {
          author: "websocket",
          message: "Test 555"
        }
      ]
    },
    "9999999999": {
      messages: []
    },
    "7777777777": {
      messages: []
    },
    "6666666666": {
      messages: []
    },
    "4444444444": {
      messages: []
    }
  };

  constructor() {}
}
