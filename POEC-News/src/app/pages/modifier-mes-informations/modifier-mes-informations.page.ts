import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { ChangePassword } from 'src/app/auth/ChangePassword';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-modifier-mes-informations',
  templateUrl: './modifier-mes-informations.page.html',
  styleUrls: ['./modifier-mes-informations.page.scss'],
})
export class ModifierMesInformationsPage implements OnInit {

  form: any = {};

  form2: any = {};

  constructor(
    private router: Router,
    private zone: NgZone,
    private userService: UserService,
    private toast: ToastController,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form.loginName = this.authService.getLoginName();
    this.form.email = this.authService.getEmail();
  }

  saveUser() {
    const id: number = +this.authService.getId();
    const categoryId = +this.authService.getCategoryId();
    const user = {
      id,
      loginName: this.form.loginName,
      email: this.form.email,
      category: categoryId,
      password: null, // pas pris en compte par le back
      accredit: null // todo
    };

    this.userService.updateUser(id, user).subscribe(
      async data => {
        const toast = await this.toast.create({
          message: 'Informations modifiées',
          duration: 2000
        });
        toast.present();
        this.zone.run(() => this.router.navigateByUrl('home'));
      },
      error => {
        this.toast.create({
          message: 'Erreur:' + error,
          duration: 2000
        }).then(res => res.present());
        console.log('ERROR=' + error);
      });
  }

  async changePassword() {
    if (this.form2.newPassword !== this.form2.newPassword2) {
      await this.toast.create({
        message: 'Les 2 mots de passe sont différents',
        duration: 3000
      }).then(res => res.present());
    }
    else {
      const cp: ChangePassword = new ChangePassword();
      cp.email = this.authService.getEmail();
      cp.oldPassword = this.form2.oldPassword;
      cp.newPassword = this.form2.newPassword;
      this.authService.changePassword(cp).subscribe(
        async response => {
          await this.toast.create({
            message: 'Changement de mot de passe réussi.',
            duration: 3000
          }).then(res => res.present());

          this.authService.logout();
          this.zone.run(() => this.router.navigateByUrl(`home`));

        },
        error => {
          this.authService.logout();
          window.location.reload();
          this.zone.run(() => this.router.navigateByUrl(`home`));
        }
      );
    }
  }

}
