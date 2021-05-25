import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererRedacteursPageRoutingModule } from './gerer-redacteurs-routing.module';

import { GererRedacteursPage } from './gerer-redacteurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererRedacteursPageRoutingModule
  ],
  declarations: [GererRedacteursPage]
})
export class GererRedacteursPageModule {}
