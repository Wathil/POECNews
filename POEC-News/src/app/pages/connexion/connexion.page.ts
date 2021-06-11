import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthLoginInfo } from 'src/app/auth/login-info';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  loginName = '';
  private loginInfo: AuthLoginInfo;

  loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  })

  constructor(
    private authService: AuthService,
    private toast: ToastController,
    private zone: NgZone,
    private router: Router,
    private appComponent: AppComponent,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.authService.isLogged()) {
      this.isLoggedIn = true;
      this.loginName = this.authService.getLoginName();
    }
  }

  onSubmit() {
    const formValue = this.loginForm.value;

    this.loginInfo = new AuthLoginInfo(      
      formValue['email'],
      formValue['password']);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      async jwtResponse => {
        this.authService.setJwtResponse(jwtResponse);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        let toast = await this.toast.create({
          message: 'Connexion réussie.',
          duration: 3000
        });
        toast.present();
        this.appComponent.refreshRole();
        if (this.authService.redirectUrl) {
          this.zone.run(() => this.router.navigateByUrl(this.authService.redirectUrl));
        }
        else {
          this.zone.run(() => this.router.navigateByUrl(`home`));
        }
      },
      error => {
        console.log("ERROR=" + error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
