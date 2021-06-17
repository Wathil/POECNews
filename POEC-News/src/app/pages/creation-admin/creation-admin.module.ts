import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationAdminPageRoutingModule } from './creation-admin-routing.module';

import { CreationAdminPage } from './creation-admin.page';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationAdminPageRoutingModule,
    MaterialModule
  ],
  declarations: [CreationAdminPage]
})
export class CreationAdminPageModule {}
