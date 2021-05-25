import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererUtilisateursPageRoutingModule } from './gerer-utilisateurs-routing.module';

import { GererUtilisateursPage } from './gerer-utilisateurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererUtilisateursPageRoutingModule
  ],
  declarations: [GererUtilisateursPage]
})
export class GererUtilisateursPageModule {}
