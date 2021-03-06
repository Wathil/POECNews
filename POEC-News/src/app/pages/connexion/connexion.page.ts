import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthLoginInfo } from 'src/app/auth/login-info';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  });

  form: any = {};
  errorMessage = '';
  loginName = '';
  private loginInfo: AuthLoginInfo;

  constructor(
    private authService: AuthService,
    private toast: ToastController,
    private zone: NgZone,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.authService.isConnected()) {
      this.loginName = this.authService.getLoginName();
    }
  }

  onSubmit() {
    const formValue = this.loginForm.value;

    this.loginInfo = new AuthLoginInfo(
      formValue.email,
      formValue.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      async jwtResponse => {
        console.log("jwtResponse.accessToken=" + jwtResponse.accessToken);
        this.authService.setJwtResponse(jwtResponse);
        const toast = await this.toast.create({
          message: 'Connexion réussie.',
          duration: 3000
        });
        toast.present();
        //this.appComponent.refreshRole();
        if (this.authService.redirectUrl) {
          this.zone.run(() => this.router.navigateByUrl(this.authService.redirectUrl));
        }
        else {
          this.zone.run(() => this.router.navigateByUrl(`home`));
        }
      },
      async error => {
        console.log("error=" + JSON.stringify(error));
        const toast = await this.toast.create({
          message: 'Email/Mot de passe incorrect',
          duration: 3000
        });
        toast.present();
        this.errorMessage = error.message;
      }
    );
  }
}
