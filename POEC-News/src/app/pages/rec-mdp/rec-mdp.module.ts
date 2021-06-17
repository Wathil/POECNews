import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecMdpPageRoutingModule } from './rec-mdp-routing.module';

import { RecMdpPage } from './rec-mdp.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecMdpPageRoutingModule,
    MaterialModule  
  ],
  declarations: [RecMdpPage]
})
export class RecMdpPageModule {}
