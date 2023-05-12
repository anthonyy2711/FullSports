import { TestBed } from '@angular/core/testing';

import { PLStandingsService } from './plstandings.service';

describe('PLStandingsService', () => {
  let service: PLStandingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PLStandingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
