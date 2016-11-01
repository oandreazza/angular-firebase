import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent }      from './hero-list/hero-list.component';
import { HeroCreateComponent }    from './hero-create/hero-create.component';
import { HeroEditComponent }    from './hero-edit/hero-edit.component';
import { LoginComponent } from './login/login.component';

import { HeroResolver} from './hero.resolver';
import { AuthGuardService } from './auth-guard.service';
import { HeroMapsComponent } from './hero-maps/hero-maps.component'

const appRoutes: Routes = [
  {
    path: 'heroes',
    canActivateChild: [AuthGuardService],
    children:[
      {
        path: '',
        component: HeroListComponent
      },
      {
        path: 'create',
        component: HeroCreateComponent
      },
      {
        path: 'edit/:key',
        component: HeroEditComponent,
        resolve: {
          hero: HeroResolver
        }
      },
      {
        path: 'maps',
        component: HeroMapsComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
  	path: '',
  	redirectTo: '/heroes',
  	pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
