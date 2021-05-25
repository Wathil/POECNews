import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecMdpPageRoutingModule } from './rec-mdp-routing.module';

import { RecMdpPage } from './rec-mdp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecMdpPageRoutingModule
  ],
  declarations: [RecMdpPage]
})
export class RecMdpPageModule {}
