import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactsService } from "./services/contacts.service";
import { WebSocketService } from "./services/webSocketService";
import { ChatService } from "./services/chat.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    MessagesComponent,
    HomeComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [ContactsService, WebSocketService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {}
