import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { SignUpInfo } from 'src/app/auth/signup-info';

@Component({
  selector: 'app-creation-admin',
  templateUrl: './creation-admin.page.html',
  styleUrls: ['./creation-admin.page.scss'],
})

export class CreationAdminPage implements OnInit {

  signupInfo: SignUpInfo;
  form: any = {};
  errorMessage = '';

  constructor(
    private router: Router,
    private toast: ToastController,
    private authService: AuthService,
    private zone: NgZone
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    var roles;
    if (this.form.category == '0')
      roles = ['administrateur'];
    else if (this.form.category == '1')
      roles = ['redacteur'];
    else
      roles = ['utilisateur'];

    this.signupInfo = new SignUpInfo(
      this.form.loginName,
      this.form.email,
      this.form.password,
      roles);

    this.authService.signUp(this.signupInfo).subscribe(
      async data => {
        let toast = await this.toast.create({
          message: `${roles[0]} inscrit!`,
          duration: 3000
        });
        toast.present();
        if (roles[0] == 'redacteur')
          this.zone.run(() => this.router.navigateByUrl(`gerer-redacteurs`));
        if (roles[0] == 'utilisateur')
          this.zone.run(() => this.router.navigateByUrl(`gerer-utilisateurs`));
      },
      error => {
        console.log("CreationAdminPage onSubmit()=" + error);
        this.errorMessage = error.error.message;
      }
    );
  }

}
