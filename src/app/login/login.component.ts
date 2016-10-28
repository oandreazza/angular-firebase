import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router){}

  ngOnInit() {
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
