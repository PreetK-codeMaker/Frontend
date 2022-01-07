import { TestBed } from '@angular/core/testing';

import { EventDataFetchingService } from './event-data-fetching.service';

describe('DataFetchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventDataFetchingService = TestBed.get(EventDataFetchingService);
    expect(service).toBeTruthy();
  });
});
