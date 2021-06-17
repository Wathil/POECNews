import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecMdpPage } from './rec-mdp.page';

const routes: Routes = [
  {
    path: '',
    component: RecMdpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecMdpPageRoutingModule {}
