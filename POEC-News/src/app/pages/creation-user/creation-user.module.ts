import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationUserPageRoutingModule } from './creation-user-routing.module';

import { CreationUserPage } from './creation-user.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationUserPageRoutingModule,
    MaterialModule
  ],
  declarations: [CreationUserPage]
})
export class CreationUserPageModule {}
