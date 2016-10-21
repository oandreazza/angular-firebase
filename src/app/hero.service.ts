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
      this.af.database.list('heroes').push(hero);
  }

  login():  any{
    this.af.auth.login();
    return this.af.auth;
  }

  logout() {
     this.af.auth.logout();
  }

}
