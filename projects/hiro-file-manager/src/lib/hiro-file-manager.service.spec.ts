import { TestBed } from '@angular/core/testing';

import { HiroFileManagerService } from './hiro-file-manager.service';

describe('HiroFileManagerService', () => {
  let service: HiroFileManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiroFileManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
