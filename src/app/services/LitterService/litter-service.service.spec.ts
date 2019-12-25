import { TestBed } from '@angular/core/testing';

import { LitterService } from './litter-service.service';

describe('LitterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LitterService = TestBed.get(LitterService);
    expect(service).toBeTruthy();
  });
});
