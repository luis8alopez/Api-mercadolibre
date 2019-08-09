import { TestBed } from '@angular/core/testing';

import { RestMLService } from './rest-ml.service';

describe('RestMLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestMLService = TestBed.get(RestMLService);
    expect(service).toBeTruthy();
  });
});
