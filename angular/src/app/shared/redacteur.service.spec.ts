import { TestBed } from '@angular/core/testing';

import { RedacteurService } from './redacteur.service';

describe('RedacteurService', () => {
  let service: RedacteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedacteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
