import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererCategoriePage } from './gerer-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: GererCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GererCategoriePageRoutingModule {}
