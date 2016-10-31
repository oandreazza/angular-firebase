import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/index'

import {initializeApp, database} from 'firebase';

import { Hero } from './hero'



@Injectable()
export class HeroService {

  constructor(private af: AngularFire){
  }

  getAll(name?:string): FirebaseListObservable<Hero[]>{
    return this.af.database.list('heroes',{
      query : {
        orderByChild: 'name',
        equalTo: name
      }
    })
  }

  find(key: string): FirebaseObjectObservable<Hero>{
    return this.af.database.object(`heroes/${key}`);
  }

  save(hero: Hero): any{
    const ref = this.af.database.list('heroes');
    return ref.push({name : hero.name} );
  }

  update(key: string, hero: Hero): any{
    const ref = this.af.database.list('heroes');
    return ref.update(key,{
      name: hero.name
    })
  }

  delete(key: string): void{
    const ref = this.af.database.list('heroes');
    ref.remove(key);
  }

  clean(): void{
    const ref = this.af.database.list('heroes');
    ref.remove();
  }


}
