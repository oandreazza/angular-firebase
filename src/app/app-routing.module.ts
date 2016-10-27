import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent }      from './hero-list/hero-list.component';
import { HeroCreateComponent }    from './hero-create/hero-create.component';
import { HeroEditComponent }    from './hero-edit/hero-edit.component';

import { HeroResolver} from './hero.resolver';

const appRoutes: Routes = [
  {
    path: 'heroes',
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
      }
    ]
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
