import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationCategoryPageRoutingModule } from './creation-category-routing.module';

import { CreationCategoryPage } from './creation-category.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationCategoryPageRoutingModule,
    MaterialModule
  ],
  declarations: [CreationCategoryPage]
})
export class CreationCategoryPageModule {}
