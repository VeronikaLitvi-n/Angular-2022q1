import { TestBed } from '@angular/core/testing';

import { OpenSettingsService } from './open-settings.service';

describe('OpenSettingsService', () => {
  let service: OpenSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
