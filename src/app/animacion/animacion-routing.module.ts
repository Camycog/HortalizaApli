import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AnimacionPage } from './animacion.page';

const routes: Routes = [
  {
    path: '',
    component: AnimacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimacionPageRoutingModule {}
