import { Injectable } from '@angular/core';
import { CanActivateChild,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivateChild {

  constructor(private router: Router) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let user = localStorage.getItem('user');
    if(user !== null && user != 'null'){
      //let url = state.url;
      //this.router.navigate([url]);
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
    /*if(user != 'null'){
      let url = state.url;
      this.router.navigate([url]);
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }*/


  }



}
