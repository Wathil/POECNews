import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationArticlePage } from './creation-article.page';

const routes: Routes = [
  {
    path: '',
    component: CreationArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationArticlePageRoutingModule {}
