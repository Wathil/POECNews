import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererRedacteursPage } from './gerer-redacteurs.page';

const routes: Routes = [
  {
    path: '',
    component: GererRedacteursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GererRedacteursPageRoutingModule {}
