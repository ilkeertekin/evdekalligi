import { TestBed } from '@angular/core/testing';

import { PuanDurumuService } from './puan-durumu.service';

describe('PuanDurumuService', () => {
  let service: PuanDurumuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuanDurumuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
