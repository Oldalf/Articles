import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero/components/hero-detail/hero-detail.component';
import { HeroesComponent } from './hero/components/heroes/heroes.component';
import { HeroService } from './hero/services/hero.service';

describe('AppComponent', () => {
  let mockHeroService: jasmine.SpyObj<HeroService>;

  beforeEach(async () => {
    mockHeroService = jasmine.createSpyObj<HeroService>('HeroService', [
      'getHeroes',
    ]);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
      providers: [{ provide: HeroService, useValue: mockHeroService }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
