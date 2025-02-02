import { TestBed } from '@angular/core/testing';

import { ApihomeService } from './apihome.service';

describe('ApihomeService', () => {
  let service: ApihomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApihomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
