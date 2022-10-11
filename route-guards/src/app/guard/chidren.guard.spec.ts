import { TestBed } from '@angular/core/testing';

import { ChidrenGuard } from './chidren.guard';

describe('ChidrenGuard', () => {
  let guard: ChidrenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChidrenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
