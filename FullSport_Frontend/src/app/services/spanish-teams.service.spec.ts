import { TestBed } from '@angular/core/testing';

import { SpanishTeamsService } from './spanish-teams.service';

describe('SpanishTeamsService', () => {
  let service: SpanishTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpanishTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
