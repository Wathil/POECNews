import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login.guard';

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
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'gerer-articles',
    loadChildren: () => import('./pages/gerer-articles/gerer-articles.module').then(m => m.GererArticlesPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'gerer-redacteurs',
    loadChildren: () => import('./pages/gerer-redacteurs/gerer-redacteurs.module').then(m => m.GererRedacteursPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'gerer-utilisateurs',
    loadChildren: () => import('./pages/gerer-utilisateurs/gerer-utilisateurs.module').then(m => m.GererUtilisateursPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then(m => m.ConnexionPageModule)
  },
  {
    path: 'gerer-utilisateur/:id',
    loadChildren: () => import('./pages/gerer-utilisateur/gerer-utilisateur.module').then(m => m.GererUtilisateurPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'gerer-redacteur/:id',
    loadChildren: () => import('./pages/gerer-redacteur/gerer-redacteur.module').then(m => m.GererRedacteurPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'rec-mdp',
    loadChildren: () => import('./pages/rec-mdp/rec-mdp.module').then(m => m.RecMdpPageModule)
  },
  {
    path: 'modifier-mes-informations',
    loadChildren: () => import('./pages/modifier-mes-informations/modifier-mes-informations.module').then(m => m.ModifierMesInformationsPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'creation-admin',
    loadChildren: () => import('./pages/creation-admin/creation-admin.module').then(m => m.CreationAdminPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'creation-article',
    loadChildren: () => import('./pages/creation-article/creation-article.module').then(m => m.CreationArticlePageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'modif-article/:id',
    loadChildren: () => import('./pages/modif-article/modif-article.module').then(m => m.ModifArticlePageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'article/:id',
    loadChildren: () => import('./pages/article/article.module').then(m => m.ArticlePageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'gerer-categories',
    loadChildren: () => import('./pages/gerer-categories/gerer-categories.module').then(m => m.GererCategoriesPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'gerer-categorie/:id',
    loadChildren: () => import('./pages/gerer-categorie/gerer-categorie.module').then(m => m.GererCategoriePageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'creation-category/',
    loadChildren: () => import('./pages/creation-category/creation-category.module').then(m => m.CreationCategoryPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'articles-par-categorie/:categoryId',
    loadChildren: () => import('./pages/articles-par-categorie/articles-par-categorie.module').then(m => m.ArticlesParCategoriePageModule)
  },
  {
    path: 'articles-par-auteur/:userId',
    loadChildren: () => import('./pages/articles-par-auteur/articles-par-auteur.module').then(m => m.ArticlesParAuteurPageModule)
  },
  {
    path: 'inscription-utilisateur',
    loadChildren: () => import('./pages/inscription-utilisateur/inscription-utilisateur.module').then(m => m.InscriptionUtilisateurPageModule)
  },


  { path: '**', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
