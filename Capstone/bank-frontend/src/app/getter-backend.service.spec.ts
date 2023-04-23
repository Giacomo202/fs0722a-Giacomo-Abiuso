import { TestBed } from '@angular/core/testing';

import { GetterBackendService } from './getter-backend.service';

describe('GetterBackendService', () => {
  let service: GetterBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetterBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
