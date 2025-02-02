import { TestBed } from '@angular/core/testing';

import { ApiSigninService } from './api-signin.service';

describe('ApiSigninService', () => {
  let service: ApiSigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSigninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
