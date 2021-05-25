import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRedacteurComponent } from './composants/new-redacteur/new-redacteur.component';

const routes: Routes = [
  {path: 'newredacteur', component: NewRedacteurComponent} // localhost:4200/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
