import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2/index'

import {initializeApp, database} from 'firebase';

import { Hero } from './hero'

@Injectable()
export class HeroService {

  constructor(private af: AngularFire){

  }

  getAll(): FirebaseListObservable<Hero[]>{
    return this.af.database.list('heroes');
  }

}
