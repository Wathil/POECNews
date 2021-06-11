import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Category } from 'src/app/classes/Category';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-gerer-categories',
  templateUrl: './gerer-categories.page.html',
  styleUrls: ['./gerer-categories.page.scss'],
})
export class GererCategoriesPage implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private toast: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.reloadData();
  }

  reloadData() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  delCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(async data => {
      console.log(data);
      const toast = await this.toast.create({
        message: 'Catégorie supprimée',
        duration: 3000
      });
      toast.present();
      this.reloadData();
    });
  }

  async handleButtonClick(id: number) {
    const alert = await this.alertController.create({
      header: 'Suppression',
      message: 'Etes-vous sûr de supprimer cette catégorie ?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Oui',
          cssClass: 'secondary',
          handler: () => {
            this.delCategory(id);
          }
        }
      ]
    });
    await alert.present();
  }

}
