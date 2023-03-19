import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';
import { Hero } from 'src/app/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private httpClient: HttpClient) {}

  getHeroes() {
    return this.httpClient
      .get<{ data: Hero[] }>('/assets/mock-heroes.json')
      .pipe(
        take(1),
        map(resp => resp.data),
      );
  }
}
