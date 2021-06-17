import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererRedacteurPage } from './gerer-redacteur.page';

const routes: Routes = [
  {
    path: '',
    component: GererRedacteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GererRedacteurPageRoutingModule {}
