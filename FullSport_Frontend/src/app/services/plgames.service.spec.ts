import { TestBed } from '@angular/core/testing';

import { PLGamesService } from './plgames.service';

describe('PLGamesService', () => {
  let service: PLGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PLGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
