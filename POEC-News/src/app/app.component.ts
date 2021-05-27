import { Component, OnInit } from '@angular/core';
import { User } from './classes/User';
import { UserService } from './shared/user.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  // userCategory = 3;

  user = new User({
    category: 3
  })

  public appPages = [
    // admin
    [
      { title: 'Accueil', url: '/home', icon: 'home' },
      { title: 'Créer un compte', url: 'creation-admin', icon: 'create' },
      { title: 'Gérer les articles', url: 'gerer-articles', icon: 'create' },
      { title: 'Gérer les utilisateurs', url: 'gerer-utilisateurs', icon: 'people' },
      { title: 'Gérer les rédacteurs', url: 'gerer-redacteurs', icon: 'people-circle' },
    ],
    // redacteur
    [
      { title: 'Accueil', url: '/home', icon: 'home' },
      { title: 'Gérer les articles', url: 'gerer-articles', icon: 'create' },
      { title: 'Gérer mes informations', url: 'gerer-info', icon: 'settings' },
    ],
    // utilisateur
    [
      { title: 'Accueil', url: '/home', icon: 'home' },
      { title: 'Gérer mes informations', url: 'gerer-info', icon: 'settings' },
    ],
    // default
    [
      { title: 'Accueil', url: '/home', icon: 'home' },
      { title: 'Connexion', url: '/connexion', icon: 'log-in' },
    ]
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(3).subscribe(user => {
      if (user) {
        this.userService.user.next(user);
        this.user = user;
      }
    })

    // this.userService.user.subscribe(user => {
    //   this.user = user;
    // })
  }


}
