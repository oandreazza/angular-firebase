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
  title = 'Heroes!';

  allHeroes: Hero[] = [];
  originalHeroes: Hero[];
  user;
  hero: Hero;
  heroKey: string;
  action = "New";
  hasHeroes;
  success = false;
  alerts:Array<Object> = [];

  constructor(public service: HeroService){}


  ngOnInit(): void{
    this.hero = new Hero('');
    this.service.getAll()
      .subscribe(heroes => {
        this.allHeroes = this.originalHeroes = heroes;
        this.hasHeroes = this.allHeroes.length > 0;
      });

    this.service.af.auth
      .subscribe( user => {
        this.user = user;
      });

  }

  search(name: string): void{
    this.allHeroes = this.originalHeroes.filter(hero => hero.name.includes(name));
  }

  find(hero: Hero,key: string){
    this.hero = hero;
    this.heroKey = key;
    this.action = "Edit";
  }

  save(): void{
    this.heroKey ? this.service.update(this.heroKey,this.hero) : this.service.save(this.hero);
    const successMsg = this.heroKey ? "Edited with success" : "Created with success";
    this.cancel();
    this.alerts.push({msg:successMsg});
  }

  cancel(): void{
    this.hero = new Hero('');
    this.action = "New";
    this.heroKey = null;
  }

  delete(key: string){
    this.service.delete(key);
    this.cancel();
  }

  clean(): void{
    this.service.clean();
  }

  login() {
    this.service.login();
  }

  logout() {
     this.service.logout();
  }
}
