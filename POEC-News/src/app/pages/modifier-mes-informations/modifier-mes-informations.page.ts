import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-modifier-mes-informations',
  templateUrl: './modifier-mes-informations.page.html',
  styleUrls: ['./modifier-mes-informations.page.scss'],
})
export class ModifierMesInformationsPage implements OnInit {

  form: any = {};

  constructor(
    private userService: UserService,
    private toast: ToastController,
    private authService: AuthService) { }

  ngOnInit() {
    this.form.loginName = this.authService.getLoginName();
    this.form.email = this.authService.getEmail();
  }

  saveUser() {
    var id: number = +this.authService.getId();
    var categoryId = +this.authService.getCategoryId();
    var user = {
      id : id,
      loginName: this.form.loginName,
      email: this.form.email,
      category: categoryId,
      password: null, // pas pris en compte par le back
      accredit: null // todo
    };
    
    this.userService.updateUser(id, user).subscribe(async data => {
      let toast = await this.toast.create({
        message: 'Informations modifiées',
        duration: 3000
      });
      toast.present();
    });
  }

}
