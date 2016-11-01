import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { GeolocationService } from '../geolocation.service';
import { Location } from '../location';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private geolocationService: GeolocationService,
              private router: Router){}

  ngOnInit() {
    this.geolocationService.getCurrentLocation()
      .subscribe( location =>{
        localStorage.setItem('currentLocation',JSON.stringify(location))
      })
    this.authService.userLoaded
      .subscribe(
        user => {
          localStorage.setItem('user',user);
          this.router.navigate(['heroes']);
        }
      )
  }

  login() {
    this.authService.login();
  }



}
