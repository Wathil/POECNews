import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererArticlesPageRoutingModule } from './gerer-articles-routing.module';

import { GererArticlesPage } from './gerer-articles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererArticlesPageRoutingModule
  ],
  declarations: [GererArticlesPage]
})
export class GererArticlesPageModule {}
