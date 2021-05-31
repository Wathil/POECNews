import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesParCategoriePage } from './articles-par-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlesParCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesParCategoriePageRoutingModule {}
