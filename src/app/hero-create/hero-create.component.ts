import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent implements OnInit {


  hero = new Hero('');


  constructor(private service: HeroService) { }

  ngOnInit() {
  }

  save(hero: Hero){
    this.service.save(hero)
      .then(
        () => history.back()
      )
      .catch(
        error => console.log(error)
      );
  }

}
