import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererCategoriePageRoutingModule } from './gerer-categorie-routing.module';

import { GererCategoriePage } from './gerer-categorie.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererCategoriePageRoutingModule,
    MaterialModule
  ],
  declarations: [GererCategoriePage]
})
export class GererCategoriePageModule {}
