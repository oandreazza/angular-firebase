import { Component, OnInit, Input, EventEmitter , Output} from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  @Input()
  hero: Hero;

  @Output()
  saveRequest = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }

  save(): void{
    this.saveRequest.emit(this.hero);
  }

}
