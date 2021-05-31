import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoisirImagePage } from './choisir-image.page';

const routes: Routes = [
  {
    path: '',
    component: ChoisirImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoisirImagePageRoutingModule {}
