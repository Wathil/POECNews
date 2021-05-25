import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererInfoPage } from './gerer-info.page';

const routes: Routes = [
  {
    path: '',
    component: GererInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GererInfoPageRoutingModule {}
