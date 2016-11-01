import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-maps',
  templateUrl: './hero-maps.component.html',
  styleUrls: ['./hero-maps.component.css']
})
export class HeroMapsComponent implements OnInit {
  heroes: Hero[];
  currentLocation: Location;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.currentLocation = JSON.parse(localStorage.getItem('currentLocation'));
    this.heroService.getAllWithMaps()
      .subscribe( heroes => this.heroes = heroes);
  }

}
