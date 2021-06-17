import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationArticlePageRoutingModule } from './creation-article-routing.module';

import { CreationArticlePage } from './creation-article.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationArticlePageRoutingModule,
    MaterialModule
  ],
  declarations: [CreationArticlePage]
})
export class CreationArticlePageModule {}
