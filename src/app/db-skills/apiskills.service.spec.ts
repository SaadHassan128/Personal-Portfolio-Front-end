import { TestBed } from '@angular/core/testing';

import { ApiskillsService } from './apiskills.service';

describe('ApiskillsService', () => {
  let service: ApiskillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiskillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
