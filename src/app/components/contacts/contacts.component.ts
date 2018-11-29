import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../../services/contacts.service";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  contacts = [];
  selectedContact;
  searchText = "";

  constructor(
    private _contactsService: ContactsService,
    private _chatService: ChatService
  ) {}

  ngOnInit() {
    this.contacts = this._contactsService.contacts;
  }

  fetchAndDisplayMessages(contact) {
    this.selectedContact = contact;
    this._chatService.selectedContact.next(contact);
  }

  searchUser() {
    this.contacts = this._contactsService.contacts;
    let searchTextLowerCase = this.searchText.toLowerCase();
    this.contacts = this.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(searchTextLowerCase);
    });
  }
}
