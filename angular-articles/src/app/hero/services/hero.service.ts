import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HEROES } from 'src/app/heroes.mock';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes() {
    return of(HEROES);
  }
}
