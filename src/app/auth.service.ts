import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2/index'



@Injectable()
export class AuthService {
  private user = new Subject<any>();

  public userLoaded = this.user.asObservable();

  constructor(private af: AngularFire) {
    this.af.auth
      .subscribe(
        user =>{
          this.user.next(user);
        }
      )
    }


  login(){
    this.af.auth.login();

  }

  logout() {
     this.af.auth.logout();
     this.user.next(null);
  }





}
