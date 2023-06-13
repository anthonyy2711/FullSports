import { TestBed } from '@angular/core/testing';

import { JournalistGuardGuard } from './journalist.guard.guard';

describe('JournalistGuardGuard', () => {
  let guard: JournalistGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JournalistGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
