import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { HEROES } from 'src/app/heroes.mock';
import { HeroService } from '../../services/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService: jasmine.SpyObj<HeroService>;

  beforeEach(async () => {
    mockHeroService = jasmine.createSpyObj<HeroService>('HeroService', [
      'getHeroes',
    ]);
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    await TestBed.configureTestingModule({
      declarations: [HeroesComponent, HeroDetailComponent],
      providers: [{ provide: HeroService, useValue: mockHeroService }],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select hero', () => {
    const button = (fixture.nativeElement as HTMLElement).querySelector(
      'button',
    );

    button?.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(button!.classList.contains('selected')).toBeTrue();
  });
});
