import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

import { Hero } from './hero';

import {firebaseConfig} from '../environments/firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  allHeroes: Hero[];

  constructor(private service: HeroService){}


  ngOnInit(): void{
    this.service.getAll()
    .subscribe(heroes => this.allHeroes = heroes);
  }
}
