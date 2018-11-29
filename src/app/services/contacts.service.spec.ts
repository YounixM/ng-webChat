import { TestBed } from "@angular/core/testing";

import { ContactsService } from "./contacts.service";

describe("ContactsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit("should be created", () => {
    const service: ContactsService = TestBed.get(ContactsService);
    expect(service).toBeTruthy();
  });
});
