import { TestBed } from '@angular/core/testing';

import { SellingOrderService } from './selling-order.service';

describe('SellingOrderService', () => {
  let service: SellingOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellingOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
