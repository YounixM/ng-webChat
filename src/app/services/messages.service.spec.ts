import { TestBed } from "@angular/core/testing";

import { MessagesService } from "./messages.service";

describe("MessagesService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit("should be created", () => {
    const service: MessagesService = TestBed.get(MessagesService);
    expect(service).toBeTruthy();
  });
});
