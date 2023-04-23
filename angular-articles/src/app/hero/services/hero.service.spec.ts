import { HttpClient } from '@angular/common/http';
import { firstValueFrom, of } from 'rxjs';
import { HEROES } from 'src/app/heroes.mock';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
    mockHttpClient.get.and.returnValue(of({ data: HEROES }));

    service = new HeroService(mockHttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getHeros', () => {
    it('should send http request', () => {
      service.getHeroes().subscribe();

      expect(mockHttpClient.get).toHaveBeenCalledOnceWith(
        '/assets/mock-heroes.json',
      );
    });

    it('should return heroes data', async () => {
      const value = await firstValueFrom(service.getHeroes());

      expect(value).toEqual(HEROES);
    });
  });
});
