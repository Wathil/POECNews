import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { User } from 'src/app/classes/User';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-gerer-redacteurs',
  templateUrl: './gerer-redacteurs.page.html',
  styleUrls: ['./gerer-redacteurs.page.scss'],
})
export class GererRedacteursPage implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private toast: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.reloadData();
  }

  reloadData() {
    this.userService.getRedacteurs().subscribe(data => {
      this.users = data;
    });
  }

  delUser(id: number) {
    this.userService.deleteUser(id).subscribe(async data => {
      const toast = await this.toast.create({
        message: 'Rédacteur supprimé',
        duration: 3000
      });
      toast.present();
      this.reloadData();
    });
  }

  async handleButtonClick(id: number) {
    const alert = await this.alertController.create({
      header: 'Suppression',
      message: 'Etes-vous sûr de vouloir supprimer ce rédacteur ?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Oui',
          cssClass: 'secondary',
          handler: () => {
            this.delUser(id);
          }
        }
      ]
    });
    await alert.present();
  }
}
