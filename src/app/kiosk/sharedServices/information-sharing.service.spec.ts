import { TestBed } from '@angular/core/testing';

import { InformationSharingService } from './information-sharing.service';

describe('InformationSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationSharingService = TestBed.get(InformationSharingService);
    expect(service).toBeTruthy();
  });
});
