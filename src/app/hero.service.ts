import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2/index'

import {initializeApp, database} from 'firebase';

import { Hero } from './hero'



@Injectable()
export class HeroService {

  constructor(public af: AngularFire){
  }

  getAll(): FirebaseListObservable<Hero[]>{
    return this.af.database.list('heroes');
  }

  save(hero: Hero): void{
    const ref = this.af.database.list('heroes');
    ref.push(hero);
  }

  update(key: string, hero: Hero): void{
    const ref = this.af.database.list('heroes');
    ref.update(key,{
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

  login():  any{
    this.af.auth.login();
    return this.af.auth;
  }

  logout() {
     this.af.auth.logout();
  }

}
