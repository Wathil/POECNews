import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-modif-article',
  templateUrl: './modif-article.page.html',
  styleUrls: ['./modif-article.page.scss'],
})
export class ModifArticlePage implements OnInit {

  editForm: FormGroup;
  id: any;

  images: string[] = [
    './assets/img/1.jpg',
    './assets/img/2.jpg',
    './assets/img/3.jpg',
    './assets/img/4.jpg',
    './assets/img/5.jpg',
    './assets/img/6.jpg',
    './assets/img/7.jpg',
    './assets/img/8.jpg',
    './assets/img/9.jpg',
    './assets/img/10.jpg',
    './assets/img/11.jpg',
    './assets/img/12.jpg',
    './assets/img/13.jpg',
    './assets/img/14.jpg'
  ];

  imageSelected: string = null;

  constructor(private router: Router,
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private zone: NgZone,
    private toast: ToastController,
    private articleService: ArticleService
    ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      titre: [''],
      contenu: [''],
      urlImage: [null]
    });

    this.id = this.actRoute.snapshot.params.id;

    this.articleService.getArticle(this.id).subscribe(data =>{
      console.log(data);
      this.editForm.patchValue({
        id: this.id,
        titre: data.titre,
        contenu: data.contenu,
        urlImage: data.urlImage
      });
      this.imageSelected = this.editForm.controls.urlImage.value;
    });
  }

  saveForm(){
    this.articleService.updateArticle(this.id, this.editForm.value).subscribe(async data => {
      console.log(data);
      const toast = await this.toast.create({
        message: 'Article modifié.',
        duration: 3000
      });
      toast.present();
      this.zone.run(() => this.router.navigateByUrl(`gerer-articles`));
    });
  }

  clickImage(i: number) {
    this.imageSelected = this.images[i];
    this.editForm.controls.urlImage.setValue(this.images[i]);
  }

}
