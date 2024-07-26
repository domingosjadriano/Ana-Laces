import { TestBed } from '@angular/core/testing';

import { PerucasService } from './perucas.service';

describe('PerucasService', () => {
  let service: PerucasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerucasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
