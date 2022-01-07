import { TestBed } from '@angular/core/testing';

import { StaffDataSharingService } from './Staff-data-sharing.service';

describe('DataSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffDataSharingService = TestBed.get(StaffDataSharingService);
    expect(service).toBeTruthy();
  });
});
