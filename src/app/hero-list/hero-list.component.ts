import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  recordsPerPage = 10;
  allHeroes: Hero[];
  currentPage: number;
  pages: Array<number>;

  constructor(public service: HeroService,
    private heroService: HeroService,
    private router: Router){}



  ngOnInit() {
    this.currentPage = 1;
    const searchInput:any = document.querySelector('#search');
    const search$ = Observable.fromEvent(searchInput,'keyup');
    const data$ = this.service.getAll();

    const searchEvent$ = search$
      .switchMap( () => this.service.getAll(searchInput.value));

    searchEvent$
      .subscribe(heroes => this.pagination(heroes));

    data$
      .subscribe( heroes => this.pagination(heroes));

  }

  pagination(heroes: Hero[]){
    this.pages = new Array();
    this.heroes = this.allHeroes = heroes;
    this.heroes = this.allHeroes.slice(0,10);
    let totalPages = Math.floor(this.allHeroes.length / 10)+1;
    for(let i = 1; i <= totalPages; i++){
      this.pages.push(i);
    }
  }
  edit(key: string){
    this.router.navigate(['heroes/edit', key]);
  }

  delete(key: string){
    this.service.delete(key);
  }

  paginate(page: number){
    this.currentPage = page;
    let next = this.currentPage * this.recordsPerPage;
    let previous = next - this.recordsPerPage;

    this.heroes = this.allHeroes.slice(previous,next);
  }


}
