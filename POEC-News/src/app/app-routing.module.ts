import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //redirectTo: 'rec-mdp',
    redirectTo: 'gerer-redacteurs',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'gerer-articles',
    loadChildren: () => import('./pages/gerer-articles/gerer-articles.module').then( m => m.GererArticlesPageModule)
  },
  {
    path: 'gerer-redacteurs',
    loadChildren: () => import('./pages/gerer-redacteurs/gerer-redacteurs.module').then( m => m.GererRedacteursPageModule)
  },
  {
    path: 'gerer-utilisateurs',
    loadChildren: () => import('./pages/gerer-utilisateurs/gerer-utilisateurs.module').then( m => m.GererUtilisateursPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'gerer-info',
    loadChildren: () => import('./pages/gerer-info/gerer-info.module').then( m => m.GererInfoPageModule)
  },
  {
    path: 'rec-mdp',
    loadChildren: () => import('./pages/rec-mdp/rec-mdp.module').then( m => m.RecMdpPageModule)
  },
  {
    path: 'creation-user',
    loadChildren: () => import('./pages/creation-user/creation-user.module').then( m => m.CreationUserPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
