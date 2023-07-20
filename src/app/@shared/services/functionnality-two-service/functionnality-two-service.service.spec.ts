import { TestBed } from '@angular/core/testing';

import { FunctionnalityTwoServiceService } from './functionnality-two-service.service';

describe('FunctionnalityTwoServiceService', () => {
  let service: FunctionnalityTwoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionnalityTwoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
