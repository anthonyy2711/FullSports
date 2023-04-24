import { TestBed } from '@angular/core/testing';

import { FixturesService } from './fixtures.service';

describe('FixturesService', () => {
  let service: FixturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
