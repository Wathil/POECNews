import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationCategoryPage } from './creation-category.page';

const routes: Routes = [
  {
    path: '',
    component: CreationCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationCategoryPageRoutingModule {}
