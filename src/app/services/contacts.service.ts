import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactsService {
  contacts = [
    {
      name: "Joey",
      phoneNumber: 7899066282
    },
    {
      name: "Chandler",
      phoneNumber: 9999999999
    },
    {
      name: "Monica",
      phoneNumber: 7777777777
    },
    {
      name: "Ross",
      phoneNumber: 6666666666
    },
    {
      name: "Phoebe",
      phoneNumber: 5555555555
    },
    {
      name: "Racheal",
      phoneNumber: 4444444444
    }
  ];

  constructor(private http: HttpClient) {}
}
