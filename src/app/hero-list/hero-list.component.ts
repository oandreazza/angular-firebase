import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];

  constructor(public service: HeroService,
    private heroService: HeroService,
    private router: Router){}

  ngOnInit() {
    this.service.getAll()
      .subscribe(heroes => {
          this.heroes = heroes;
          //this.hasHeroes = this.allHeroes.length > 0;
        },
    );

  }

  edit(key: string){
    this.router.navigate(['heroes/edit', key]);
  }


}
