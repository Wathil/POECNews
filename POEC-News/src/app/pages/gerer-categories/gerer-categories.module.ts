import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererCategoriesPageRoutingModule } from './gerer-categories-routing.module';

import { GererCategoriesPage } from './gerer-categories.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererCategoriesPageRoutingModule,
    MaterialModule
  ],
  declarations: [GererCategoriesPage]
})
export class GererCategoriesPageModule {}
