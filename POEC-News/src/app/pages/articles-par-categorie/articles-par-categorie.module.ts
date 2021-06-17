import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlesParCategoriePageRoutingModule } from './articles-par-categorie-routing.module';

import { ArticlesParCategoriePage } from './articles-par-categorie.page';

import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlesParCategoriePageRoutingModule,
    MaterialModule
  ],
  declarations: [ArticlesParCategoriePage]
})
export class ArticlesParCategoriePageModule {}
