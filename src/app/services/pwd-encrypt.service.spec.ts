import { TestBed } from '@angular/core/testing';

import { PwdEncryptService } from './pwd-encrypt.service';

describe('PwdEncryptService', () => {
  let service: PwdEncryptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwdEncryptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
