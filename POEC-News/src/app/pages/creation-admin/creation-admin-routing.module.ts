import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationAdminPage } from './creation-admin.page';

const routes: Routes = [
  {
    path: '',
    component: CreationAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationAdminPageRoutingModule {}
