import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { User } from 'src/app/classes/User';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-gerer-utilisateurs',
  templateUrl: './gerer-utilisateurs.page.html',
  styleUrls: ['./gerer-utilisateurs.page.scss'],
})
export class GererUtilisateursPage implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService,
    private toast: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.reloadData();
  }

  reloadData() {
    this.userService.getUtilisateurs().subscribe(data => {
      this.users = data;
    });
  }

  delUser(id: number) {
    this.userService.deleteUser(id).subscribe(async data => {
      console.log(data);
      const toast = await this.toast.create({
        message: 'Utilisateur supprimé',
        duration: 3000
      });
      toast.present();
      this.reloadData();
    });
  }

  async handleButtonClick(id: number) {
    const alert = await this.alertController.create({
      header: 'Suppression',
      message: 'Etes-vous sûr de vouloir supprimer cet ulitisateur ?',
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
