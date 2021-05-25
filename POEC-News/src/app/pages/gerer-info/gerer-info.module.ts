import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererInfoPageRoutingModule } from './gerer-info-routing.module';

import { GererInfoPage } from './gerer-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererInfoPageRoutingModule
  ],
  declarations: [GererInfoPage]
})
export class GererInfoPageModule {}
