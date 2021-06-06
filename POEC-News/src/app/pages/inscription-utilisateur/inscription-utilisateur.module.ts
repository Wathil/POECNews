import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionUtilisateurRoutingModule } from './inscription-utilisateur-routing.module';

import { InscriptionUtilisateurPage } from './inscription-utilisateur.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionUtilisateurRoutingModule,
    MaterialModule
  ],
  declarations: [InscriptionUtilisateurPage]
})
export class InscriptionUtilisateurPageModule {}
