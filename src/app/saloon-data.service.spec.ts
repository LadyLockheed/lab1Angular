import { TestBed } from '@angular/core/testing';

import { SaloonDataService } from './saloon-data.service';

describe('SaloonDataService', () => {
  let service: SaloonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaloonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
