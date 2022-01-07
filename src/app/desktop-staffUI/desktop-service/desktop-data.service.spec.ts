import { TestBed } from '@angular/core/testing';

import { DesktopDataService } from './desktop-data.service';

describe('DesktopSharedService', () => {
  let service: DesktopDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesktopDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
