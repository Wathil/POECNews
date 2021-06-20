import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  liensAdministrateur = [
    { title: 'Accueil', url: 'home', icon: 'home' },
    { title: 'Créer un compte', url: 'creation-admin', icon: 'person-circle' },
    { title: 'Gérer les articles', url: 'gerer-articles', icon: 'create' },
    { title: 'Gérer les catégories', url: 'gerer-categories', icon: 'settings' },
    { title: 'Gérer les rédacteurs', url: 'gerer-redacteurs', icon: 'people-circle' },
    { title: 'Gérer les utilisateurs', url: 'gerer-utilisateurs', icon: 'people' },
    { title: 'Gérer mes informations', url: 'modifier-mes-informations', icon: 'settings' }
  ];

  liensRedacteur = [
    { title: 'Accueil', url: 'home', icon: 'home' },
    { title: 'Gérer les articles', url: 'gerer-articles', icon: 'create' },
    { title: 'Gérer les catégories', url: 'gerer-categories', icon: 'settings' },
    { title: 'Gérer mes informations', url: 'modifier-mes-informations', icon: 'settings' }
  ];

  liensUtilisateur = [
    { title: 'Accueil', url: 'home', icon: 'home' },
    { title: 'Gérer mes informations', url: 'modifier-mes-informations', icon: 'settings' }
  ];

  lienDefault = [
    { title: 'Accueil', url: 'home', icon: 'home' },
    { title: 'Connexion', url: 'connexion', icon: 'log-in' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    window.location.reload();
    this.router.navigateByUrl('home'); // marche pas
  }

}
