import { TestBed } from '@angular/core/testing';

import { DesktopComponentCommunicationService } from './desktop-component-communication.service';

describe('DesktopShareInformationService', () => {
  let service: DesktopComponentCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesktopComponentCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
