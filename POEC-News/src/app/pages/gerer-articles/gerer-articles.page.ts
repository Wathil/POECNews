import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Article } from 'src/app/classes/Article';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-gerer-articles',
  templateUrl: './gerer-articles.page.html',
  styleUrls: ['./gerer-articles.page.scss'],
})
export class GererArticlesPage implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService,
    private toast: ToastController,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.reloadData();
  }

  reloadData() {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  delUser(id: number) {
    this.articleService.deleteArticle(id).subscribe(async data => {
      console.log(data);
      const toast = await this.toast.create({
        message: 'Article supprimé',
        duration: 3000
      });
      toast.present();
      this.reloadData();
    });
  }

  async handleButtonClick(id: number) {
    const alert = await this.alertController.create({
      header: 'Suppression',
      message: 'Etes-vous sûr de vouloir supprimer cet article ?',
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
