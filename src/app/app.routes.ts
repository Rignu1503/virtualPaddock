import { Routes } from '@angular/router';
import { HeroComponent } from './lading/components/hero/hero.component';
import { LadingPage } from './lading/lading.component';


export const routes: Routes = [
  {
    path: '',
    component: LadingPage,

  },

  {
    path: '**',
    redirectTo: '',
  }
];

