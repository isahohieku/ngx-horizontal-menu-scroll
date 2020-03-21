import { TestBed } from '@angular/core/testing';

import { HorizontalScrollMenuService } from './horizontal-scroll-menu.service';

describe('HorizontalScrollMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorizontalScrollMenuService = TestBed.get(HorizontalScrollMenuService);
    expect(service).toBeTruthy();
  });
});
