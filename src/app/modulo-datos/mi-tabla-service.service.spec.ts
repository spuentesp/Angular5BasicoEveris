import { TestBed, inject } from '@angular/core/testing';

import { MiTablaServiceService } from './mi-tabla-service.service';

describe('MiTablaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiTablaServiceService]
    });
  });

  it('should be created', inject([MiTablaServiceService], (service: MiTablaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
