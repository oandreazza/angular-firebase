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
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroCreateComponent } from './hero-create/hero-create.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroFormComponent,
    HeroCreateComponent,
    HeroEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseConfigAuth),
    AlertModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
