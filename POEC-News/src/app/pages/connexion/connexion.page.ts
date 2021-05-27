import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(private router : Router, private userService: UserService) { }

  ngOnInit() {
  }

  goConnect(){

    // this.userService.user.next(user);
    this.router.navigateByUrl("/home");

  }
  
}
