import { TestBed } from '@angular/core/testing';

import { ApiaboutService } from './apiabout.service';

describe('ApiaboutService', () => {
  let service: ApiaboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiaboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
