import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererInfoPageRoutingModule } from './gerer-info-routing.module';

import { GererInfoPage } from './gerer-info.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererInfoPageRoutingModule,
    MaterialModule
  ],
  declarations: [GererInfoPage]
})
export class GererInfoPageModule {}
