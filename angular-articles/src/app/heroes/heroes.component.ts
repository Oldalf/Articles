import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../hero.model';
import { HEROES } from '../heroes.mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent {
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
