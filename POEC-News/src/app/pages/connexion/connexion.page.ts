import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthLoginInfo } from 'src/app/auth/login-info';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

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

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private toast: ToastController,
    private zone: NgZone,
    private router: Router,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.loginName = this.tokenStorage.getLoginName();
    }
  }

  onSubmit() {
    this.loginInfo = new AuthLoginInfo(
      this.form.email,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      async jwtResponse => {
        this.tokenStorage.saveToken(jwtResponse.accessToken);
        this.tokenStorage.saveLoginName(jwtResponse.loginName);
        this.tokenStorage.saveEmail(jwtResponse.email);
        const newRole = jwtResponse.roles[0]
        this.tokenStorage.saveRoles(jwtResponse.roles);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        let toast = await this.toast.create({
          message: 'Connexion réussie.',
          duration: 3000
        });
        toast.present();
        this.appComponent.refreshRole(newRole);
        this.zone.run(() => this.router.navigateByUrl(`home`));
      },
      error => {
        console.log("ERROR=" + error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}
