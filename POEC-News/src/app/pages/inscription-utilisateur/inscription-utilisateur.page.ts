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
    console.log("InscriptionUtilisateurPage onSubmit()");

    this.signupInfo = new SignUpInfo(
      this.form.loginName,
      this.form.email,
      this.form.password);

      console.log("this.signupInfo.loginName=" + this.signupInfo.loginName);
      console.log("this.signupInfo.email=" + this.signupInfo.email);
      console.log("this.signupInfo.password=" + this.signupInfo.password);
      console.log("this.signupInfo.role[0]=" + this.signupInfo.role[0]);
 
    this.authService.signUp(this.signupInfo).subscribe(
      async data => {
        console.log(data);
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
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
