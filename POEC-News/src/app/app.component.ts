import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  userStatus = "default";

  public appPages = {
    admin: [
      { title: 'Accueil', url: '/home', icon: 'home' },
      { title: 'Gérer les articles', url: 'gerer-articles', icon: 'create' },
      { title: 'Gérer les utilisateurs', url: 'gerer-utilisateurs', icon: 'people' },
      { title: 'Gérer les rédacteurs', url: 'gerer-redacteurs', icon: 'people-circle' },
    ],
    utilisateur: [
      { title: 'Accueil', url: '/home', icon: 'home' },
      { title: 'Gérer mes informations', url: 'gerer-info', icon: 'settings' },
    ],
    redacteur: [
      { title: 'Accueil', url: '/home', icon: 'home' },
      { title: 'Gérer les articles', url: 'gerer-articles', icon: 'create' },
      { title: 'Gérer mes informations', url: 'gerer-info', icon: 'settings' },
    ],
    default: [
      { title: 'Accueil', url: '/home', icon: 'home' },
      { title: 'Connexion', url: '/connexion', icon: 'log-in' },
    ]
  };
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }

  ngOnInit() {
    // setTimeout(()=> {
    //   this.userStatus = "admin";
    // }, 8000);
  }


}
