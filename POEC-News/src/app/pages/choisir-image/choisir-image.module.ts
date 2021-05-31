import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoisirImagePageRoutingModule } from './choisir-image-routing.module';

import { ChoisirImagePage } from './choisir-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoisirImagePageRoutingModule
  ],
  declarations: [ChoisirImagePage]
})
export class ChoisirImagePageModule {}
