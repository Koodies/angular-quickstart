import { TestBed } from '@angular/core/testing';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of Hero', () => {
    const heroes: Hero[] = service.getHeroes()
    expect(heroes).toEqual(HEROES)
  })
});
