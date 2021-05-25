import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererRedacteursPageRoutingModule } from './gerer-redacteurs-routing.module';

import { GererRedacteursPage } from './gerer-redacteurs.page';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GererRedacteursPageRoutingModule,
    MatButtonModule
  ],
  declarations: [GererRedacteursPage]
})
export class GererRedacteursPageModule {}
