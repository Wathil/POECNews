import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererUtilisateursPage } from './gerer-utilisateurs.page';

const routes: Routes = [
  {
    path: '',
    component: GererUtilisateursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GererUtilisateursPageRoutingModule {}
