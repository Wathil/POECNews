import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererCategoriesPage } from './gerer-categories.page';

const routes: Routes = [
  {
    path: '',
    component: GererCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GererCategoriesPageRoutingModule {}
