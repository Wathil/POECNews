import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesParAuteurPage } from './articles-par-auteur.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlesParAuteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesParAuteurPageRoutingModule {}
