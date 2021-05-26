import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererUtilisateursPageRoutingModule } from './gerer-utilisateurs-routing.module';

import { GererUtilisateursPage } from './gerer-utilisateurs.page';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GererUtilisateursPageRoutingModule,
    MatButtonModule
  ],
  declarations: [GererUtilisateursPage]
})
export class GererUtilisateursPageModule {}
