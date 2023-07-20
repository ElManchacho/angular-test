import { TestBed } from '@angular/core/testing';

import { FunctionnalityOneServiceService } from './functionnality-one-service.service';

describe('FunctionnalityOneServiceService', () => {
  let service: FunctionnalityOneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionnalityOneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
