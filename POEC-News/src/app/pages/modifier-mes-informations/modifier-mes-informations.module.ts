import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierMesInformationsPageRoutingModule } from './modifier-mes-informations-routing.module';

import { ModifierMesInformationsPage } from './modifier-mes-informations.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierMesInformationsPageRoutingModule,
    MaterialModule
  ],
  declarations: [ModifierMesInformationsPage]
})
export class ModifierMesInformationsPageModule {}
