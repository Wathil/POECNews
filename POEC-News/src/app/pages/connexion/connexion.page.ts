import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  })

  constructor(private router : Router, 
    private userService: UserService, 
    private formBuilder : FormBuilder,
    private toast : ToastController
    ) { }

  ngOnInit() {
  }

  goConnect(){
    this.userService.getUsersLogin(this.loginForm.value).subscribe(user => {
      console.log(user);
      if (user){
        this.userService.user.next(user);
        this.loginForm.reset();
        this.router.navigateByUrl("home");
      }      
    })
  }
  
}
