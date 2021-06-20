import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../auth/auth.service';
import { SignUpInfo } from '../../auth/signup-info';

@Component({
  selector: 'app-inscription-utilisateur',
  templateUrl: './inscription-utilisateur.page.html',
  styleUrls: ['./inscription-utilisateur.page.scss'],
})
export class InscriptionUtilisateurPage implements OnInit {

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private toast: ToastController) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.password !== this.form.password2) {
      this.form.password = '';
      this.form.password2 = '';
      this.toast.create({
        message: 'Les 2 mots de passe sont différents',
        duration: 3000
      }).then(res => res.present());
    }
    else {
      this.signupInfo = new SignUpInfo(
        this.form.loginName,
        this.form.email,
        this.form.password,
        ['utilisateur']);

      this.authService.signUp(this.signupInfo).subscribe(
        async data => {
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          let toast = await this.toast.create({
            message: 'Utilisateur inscrit!',
            duration: 3000
          });
          toast.present();
        },
        async err => {
          console.log("reset=");
          console.log("this.signupInfo.loginName=" + this.signupInfo.loginName);
          this.form.loginName = this.signupInfo.loginName;
          console.log("this.signupInfo.email=" + this.signupInfo.email);
          this.form.email = this.signupInfo.email;
          console.log("this.signupInfo.password=" + this.signupInfo.password);
          this.form.password = this.signupInfo.password;
          this.form.password2 = this.signupInfo.password;


          console.log("error=" + JSON.stringify(err));
          console.log(err);
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;

          let toast = await this.toast.create({
            message: err.error.message,
            duration: 3000
          });
          toast.present();
        }
      );
    }
  }

}
