import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2/index';

import {firebaseConfig} from '../environments/firebase.config';
import {firebaseConfigAuth} from '../environments/firebase-auth.config';

import { HeroService } from './hero.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseConfigAuth)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
