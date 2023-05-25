import { TestBed } from '@angular/core/testing';

import { PLTeamsService } from './plteams.service';

describe('PLTeamsService', () => {
  let service: PLTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PLTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
