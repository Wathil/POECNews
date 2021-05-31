import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
    path: 'gerer-utilisateur/:id',
    loadChildren: () => import('./pages/gerer-utilisateur/gerer-utilisateur.module').then( m => m.GererUtilisateurPageModule)
  },
  {
    path: 'gerer-redacteur/:id',
    loadChildren: () => import('./pages/gerer-redacteur/gerer-redacteur.module').then( m => m.GererRedacteurPageModule)
  },
  {
    path: 'rec-mdp',
    loadChildren: () => import('./pages/rec-mdp/rec-mdp.module').then( m => m.RecMdpPageModule)
  },
  {
    path: 'creation-user',
    loadChildren: () => import('./pages/creation-user/creation-user.module').then( m => m.CreationUserPageModule)
  },
  {
    path: 'creation-admin',
    loadChildren: () => import('./pages/creation-admin/creation-admin.module').then( m => m.CreationAdminPageModule)
  },
  {
    path: 'creation-article',
    loadChildren: () => import('./pages/creation-article/creation-article.module').then( m => m.CreationArticlePageModule)
  },
  {
    path: 'modif-article/:id',
    loadChildren: () => import('./pages/modif-article/modif-article.module').then( m => m.ModifArticlePageModule)
  },
  {
    path: 'article/:id',
    loadChildren: () => import('./pages/article/article.module').then( m => m.ArticlePageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
