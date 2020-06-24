import { TestBed } from '@angular/core/testing';

import { Hero.Service.TsService } from './hero.service.ts.service';

describe('Hero.Service.TsService', () => {
  let service: Hero.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hero.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
