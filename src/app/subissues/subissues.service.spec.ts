import { TestBed } from '@angular/core/testing';

import { SubissuesService } from './subissues.service';

describe('SubissuesService', () => {
  let service: SubissuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubissuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
