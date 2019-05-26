import { TestBed } from '@angular/core/testing';

import { BusinessDataService } from './business-data.service';

describe('BusinessDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessDataService = TestBed.get(BusinessDataService);
    expect(service).toBeTruthy();
  });
});
