import { TestBed, inject } from '@angular/core/testing';

import { CheckDataService } from './check-data.service';

describe('CheckDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckDataService]
    });
  });

  it('should be created', inject([CheckDataService], (service: CheckDataService) => {
    expect(service).toBeTruthy();
  }));
});
