import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2/index';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import {firebaseConfig} from '../environments/firebase.config';
import {firebaseConfigAuth} from '../environments/firebase-auth.config';

import { HeroService } from './hero.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseConfigAuth),
    AlertModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
