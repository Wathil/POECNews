import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererRedacteurPageRoutingModule } from './gerer-redacteur-routing.module';

import { GererRedacteurPage } from './gerer-redacteur.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererRedacteurPageRoutingModule,
    MaterialModule
  ],
  declarations: [GererRedacteurPage]
})
export class GererRedacteurPageModule {}
