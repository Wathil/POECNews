import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlesParAuteurPageRoutingModule } from './articles-par-auteur-routing.module';

import { ArticlesParAuteurPage } from './articles-par-auteur.page';

import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlesParAuteurPageRoutingModule,
    MaterialModule
  ],
  declarations: [ArticlesParAuteurPage]
})
export class ArticlesParAuteurPageModule {}
