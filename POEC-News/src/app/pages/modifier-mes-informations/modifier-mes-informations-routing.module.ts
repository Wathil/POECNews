import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierMesInformationsPage } from './modifier-mes-informations.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierMesInformationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierMesInformationsPageRoutingModule {}
