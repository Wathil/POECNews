import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererUtilisateurPageRoutingModule } from './gerer-utilisateur-routing.module';

import { GererUtilisateurPage } from './gerer-utilisateur.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererUtilisateurPageRoutingModule,
    MaterialModule
  ],
  declarations: [GererUtilisateurPage]
})
export class GererUtilisateurPageModule {}
