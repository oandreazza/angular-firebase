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
import { HeroResolver } from './hero.resolver';

import { AppRoutingModule } from './app-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationService } from './notification.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { GeolocationService } from './geolocation.service';
import { DistancePipe } from './distance.pipe';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { HeroMapsComponent } from './hero-maps/hero-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroFormComponent,
    HeroCreateComponent,
    HeroEditComponent,
    NotificationsComponent,
    LoginComponent,
    DistancePipe,
    HeroMapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseConfigAuth),
    AlertModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmHG5EeM2t0urxg9KOnA1F6K5wNj5UnW0'
    }),
  ],
  providers: [HeroService, NotificationService, HeroResolver, AuthGuardService, AuthService, GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
