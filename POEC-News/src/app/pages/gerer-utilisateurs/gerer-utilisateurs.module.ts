import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererUtilisateursPageRoutingModule } from './gerer-utilisateurs-routing.module';

import { GererUtilisateursPage } from './gerer-utilisateurs.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererUtilisateursPageRoutingModule,
    MaterialModule
  ],
  declarations: [GererUtilisateursPage]
})
export class GererUtilisateursPageModule {}
