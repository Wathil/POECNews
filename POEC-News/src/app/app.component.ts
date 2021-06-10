import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  private role: string = 'invite' // Valeur par défaut

  liensAdministrateur = [
    { title: 'Accueil', url: '/home', icon: 'home' },
    { title: 'Créer un compte', url: 'creation-admin', icon: 'person-circle' },
    { title: 'Gérer les articles', url: 'gerer-articles', icon: 'create' },
    { title: 'Gérer les rédacteurs', url: 'gerer-redacteurs', icon: 'people-circle' },
    { title: 'Gérer les utilisateurs', url: 'gerer-utilisateurs', icon: 'people' },
    { title: 'Gérer mes informations', url: 'modifier-mes-informations', icon: 'settings' } // A Modifier vers modifier compte
  ]

  liensRedacteur = [
    { title: 'Accueil', url: '/home', icon: 'home' },
    { title: 'Gérer les articles', url: 'gerer-articles', icon: 'create' },
    { title: 'Gérer les catégories', url: 'gerer-categories', icon: 'settings' },
    { title: 'Gérer mes informations', url: 'modifier-mes-informations', icon: 'settings' } // A Modifier vers modifier compte
  ]

  liensUtilisateur = [
    { title: 'Accueil', url: '/home', icon: 'home' },
    { title: 'Gérer mes informations', url: 'modifier-mes-informations', icon: 'settings' }, // A Modifier vers modifier compte
  ]

  lienDefault = [
    { title: 'Accueil', url: '/home', icon: 'home' },
    { title: 'Connexion', url: '/connexion', icon: 'log-in' }
  ]

  constructor(
    private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    const role = JSON.parse(sessionStorage.getItem("AuthRoles"));
    if (role) {
      this.refreshRole(role[0]);
    }
  }

  refreshRole(newRole: string) {
    if (newRole === 'ROLE_ADMINISTRATEUR') // ExpressJS auth.controller.js
      this.role = 'administrateur';
    else if (newRole === 'ROLE_REDACTEUR') // ExpressJS auth.controller.js
      this.role = 'redacteur';
    else if (newRole === 'ROLE_UTILISATEUR') // ExpressJS auth.controller.js
      this.role = 'utilisateur';
    else
      this.role = 'invite';
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
