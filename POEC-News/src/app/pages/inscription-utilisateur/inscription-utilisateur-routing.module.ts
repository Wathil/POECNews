import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionUtilisateurPage } from './inscription-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionUtilisateurRoutingModule {}
