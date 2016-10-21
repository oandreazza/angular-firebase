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
  originalHeroes: Hero[];

  constructor(private service: HeroService){}


  ngOnInit(): void{
    this.service.getAll()
    .subscribe(heroes => this.allHeroes = this.originalHeroes = heroes);
  }

  search(name: string): void{
    this.allHeroes = this.originalHeroes.filter(hero => hero.name.includes(name));
  }

  save(name: string): void{
    let hero = new Hero(name);
    this.service.save(hero);
  }
}
