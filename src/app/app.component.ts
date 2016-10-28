import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { AuthService} from './auth.service';
import { Hero } from './hero';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user;
  title = "Heroes";

  constructor(public service: HeroService,
              private authService: AuthService,
              private router: Router){}

  ngOnInit(): void{
    this.authService.userLoaded
      .subscribe(
        user => {
          this.user = user;
        }
      )
  }

  logout() {
    localStorage.removeItem('user');
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
