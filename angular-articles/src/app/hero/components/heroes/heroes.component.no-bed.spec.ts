import { firstValueFrom, of } from 'rxjs';
import { HEROES } from 'src/app/heroes.mock';
import { HeroService } from '../../services/hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let mockHeroService: jasmine.SpyObj<HeroService>;

  beforeEach(() => {
    mockHeroService = jasmine.createSpyObj<HeroService>('HeroService', [
      'getHeroes',
    ]);
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    component = new HeroesComponent(mockHeroService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select hero', async () => {
    /* Note: We have to manually call angular lifecycle hooks */
    component.ngOnInit();

    const heroes = await firstValueFrom(component.heroes);

    component.onSelect(heroes[0]);

    expect(component.selectedHero).toEqual(heroes[0]);
  });
});
