import { Component, OnInit, Input, EventEmitter , Output, Inject} from '@angular/core';

import { Hero } from '../hero';
import {GeolocationService} from '../geolocation.service';
import { FirebaseApp, AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/index'

import {initializeApp} from 'firebase';

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

  constructor(private geolocationService: GeolocationService,
              @Inject(FirebaseApp)private af: any) { }

  ngOnInit() {
  }

  save(): void{
    this.saveRequest.emit(this.hero);
  }

  upload(file: any){
    const ref =  this.af.storage().ref();
    ref.child("teste.jpg").put(file.files[0]);
  }

  getLocation(){
      this.geolocationService
        .getLocation(this.hero.location.address)
        .subscribe( location => this.hero.location = location);
  }

}
