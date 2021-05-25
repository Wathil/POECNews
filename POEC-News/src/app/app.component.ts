import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  userStatus = "admin";

  // utilisateurMenu = [
  //   { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
  //   { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
  //   { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
  //   { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  //   { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
  //   { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  // ];

  public appPages = {
    admin : [
      { title: 'Gerer les articles', url: '/folder/Inbox', icon: 'mail' },
      { title: 'Gerer les utilisateurs', url: '/folder/Outbox', icon: 'paper-plane' },
      { title: 'Gerer les rédacteurs', url: '/folder/Favorites', icon: 'heart' },
  ],
  utilisateur : [
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ],
  redacteur : [
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ],
  default : [
    { title: 'Home', url: '/home', icon: undefined },
    { title: 'Connexion', url: '/home', icon: undefined },
  ]
};
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  ngOnInit(){
    // setTimeout(()=> {
    //   this.userStatus = "admin";
    // }, 8000);
  }
 

}
