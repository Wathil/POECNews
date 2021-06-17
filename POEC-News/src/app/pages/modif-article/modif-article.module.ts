import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifArticlePageRoutingModule } from './modif-article-routing.module';

import { ModifArticlePage } from './modif-article.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifArticlePageRoutingModule,
    MaterialModule
  ],
  declarations: [ModifArticlePage]
})
export class ModifArticlePageModule {}
