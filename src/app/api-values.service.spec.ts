import { TestBed } from '@angular/core/testing';

import { ApiValuesService } from './api-values.service';

describe('ApiValuesService', () => {
  let service: ApiValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
