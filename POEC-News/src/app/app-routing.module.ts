import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdministrateurGuard } from './guards/administrateur.guard';
import { RedacteurGuard } from './guards/redacteur.guard';
import { UtilisateurGuard } from './guards/utilisateur.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'gerer-articles',
    loadChildren: () => import('./pages/gerer-articles/gerer-articles.module').then(m => m.GererArticlesPageModule),
    canActivate: [RedacteurGuard]
  },
  {
    path: 'gerer-redacteurs',
    loadChildren: () => import('./pages/gerer-redacteurs/gerer-redacteurs.module').then(m => m.GererRedacteursPageModule),
    canActivate: [AdministrateurGuard]
  },
  {
    path: 'gerer-utilisateurs',
    loadChildren: () => import('./pages/gerer-utilisateurs/gerer-utilisateurs.module').then(m => m.GererUtilisateursPageModule),
    canActivate: [AdministrateurGuard]
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then(m => m.ConnexionPageModule)
  },
  {
    path: 'gerer-utilisateur/:id',
    loadChildren: () => import('./pages/gerer-utilisateur/gerer-utilisateur.module').then(m => m.GererUtilisateurPageModule),
    canActivate: [AdministrateurGuard]
  },
  {
    path: 'gerer-redacteur/:id',
    loadChildren: () => import('./pages/gerer-redacteur/gerer-redacteur.module').then(m => m.GererRedacteurPageModule),
    canActivate: [AdministrateurGuard]
  },
  {
    path: 'rec-mdp',
    loadChildren: () => import('./pages/rec-mdp/rec-mdp.module').then(m => m.RecMdpPageModule)
  },
  {
    path: 'modifier-mes-informations',
    loadChildren: () => import('./pages/modifier-mes-informations/modifier-mes-informations.module')
      .then(m => m.ModifierMesInformationsPageModule),
    canActivate: [UtilisateurGuard]
  },
  {
    path: 'creation-admin',
    loadChildren: () => import('./pages/creation-admin/creation-admin.module').then(m => m.CreationAdminPageModule),
    canActivate: [AdministrateurGuard]
  },
  {
    path: 'creation-article',
    loadChildren: () => import('./pages/creation-article/creation-article.module').then(m => m.CreationArticlePageModule),
    canActivate: [RedacteurGuard]
  },
  {
    path: 'modif-article/:id',
    loadChildren: () => import('./pages/modif-article/modif-article.module').then(m => m.ModifArticlePageModule),
    canActivate: [RedacteurGuard]
  },
  {
    path: 'article/:id',
    loadChildren: () => import('./pages/article/article.module').then(m => m.ArticlePageModule),
    //canActivate: [UtilisateurGuard, RedacteurGuard, AdministrateurGuard]
    canActivate: [UtilisateurGuard]
  },
  {
    path: 'gerer-categories',
    loadChildren: () => import('./pages/gerer-categories/gerer-categories.module').then(m => m.GererCategoriesPageModule),
    canActivate: [RedacteurGuard]
  },
  {
    path: 'gerer-categorie/:id',
    loadChildren: () => import('./pages/gerer-categorie/gerer-categorie.module').then(m => m.GererCategoriePageModule),
    canActivate: [RedacteurGuard]
  },
  {
    path: 'creation-category',
    loadChildren: () => import('./pages/creation-category/creation-category.module').then(m => m.CreationCategoryPageModule),
    canActivate: [RedacteurGuard]
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
    loadChildren: () => import('./pages/inscription-utilisateur/inscription-utilisateur.module')
      .then(m => m.InscriptionUtilisateurPageModule)
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
