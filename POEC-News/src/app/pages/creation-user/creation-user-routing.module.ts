import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationUserPage } from './creation-user.page';

const routes: Routes = [
  {
    path: '',
    component: CreationUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationUserPageRoutingModule {}
