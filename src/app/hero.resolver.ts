import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Hero} from './hero';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {HeroService} from './hero.service';

@Injectable()
export class HeroResolver implements Resolve<Hero>{

  constructor(private service: HeroService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero>{
    let key = route.params['key'];
    return this.service.find(key).first();
  }

}
