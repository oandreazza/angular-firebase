import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent }      from './hero-list/hero-list.component';
import { HeroCreateComponent }    from './hero-create/hero-create.component';
import { HeroEditComponent }    from './hero-edit/hero-edit.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent
  },

  {
  	path: '',
  	redirectTo: '/heroes',
  	pathMatch: 'full'
  },
  {
    path: 'heroes/create',
    component: HeroCreateComponent
  },
  {
    path: 'heroes/edit/:key',
    component: HeroEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
