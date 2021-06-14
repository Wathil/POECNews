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
        error => {
          console.log(error);
          this.errorMessage = error.message;
          this.isSignUpFailed = true;
        }
      );
    }
  }

}
