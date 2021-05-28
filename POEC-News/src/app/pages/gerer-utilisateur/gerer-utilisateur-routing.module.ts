import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererUtilisateurPage } from './gerer-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: GererUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GererUtilisateurPageRoutingModule {}
