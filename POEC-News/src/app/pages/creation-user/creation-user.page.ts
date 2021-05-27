import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/classes/User';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-creation-user',
  templateUrl: './creation-user.page.html',
  styleUrls: ['./creation-user.page.scss'],
})
export class CreationUserPage implements OnInit {
  user: User;

  constructor(private userService: UserService, private toast: ToastController) { }

  ngOnInit() {
    this.user = this.userService.user.getValue() || new User(null);
  }

  saveUser() {
    if (this.user.id) {
      this.userService.updateUser(this.user.id, this.user).subscribe(async data => {
        let toast = await this.toast.create({
          message: 'Informations modifiées',
          duration: 3000
        });
        toast.present();
      });
    } else {
      if (this.user.category == null) {
        this.user.category = 2;
      }
      this.userService.addUser(this.user).subscribe(data => {
        console.log(data);
      })
    }
  }

}
