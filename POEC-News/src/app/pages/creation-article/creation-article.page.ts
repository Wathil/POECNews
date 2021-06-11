import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Article } from 'src/app/classes/Article';
import { User } from 'src/app/classes/User';
import { ArticleService } from 'src/app/shared/article.service';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-creation-article',
  templateUrl: './creation-article.page.html',
  styleUrls: ['./creation-article.page.scss'],
})
export class CreationArticlePage implements OnInit {
  article: Article;

  images: string[] = [
    './assets/img/1.jpg',
    './assets/img/2.jpg',
    './assets/img/3.jpg',
    './assets/img/4.jpg',
    './assets/img/5.jpg'
  ];

  imageSelected: string = null;

  articleForm = this.formBuilder.group({
    id: [null],
    titre: [''],
    userId: [null],
    categoryId: [null],
    contenu: [''],
    urlImage: [null]
  });

  @ViewChild("file", {static: true}) fileInput:any;

  categories: any;

  user: User;

  constructor(private router: Router,
    private toast: ToastController,
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(cat => {
      this.categories = cat;
    });
  }

  saveArticle() {
    const id: number = +this.authService.getId();
    this.articleForm.patchValue({userId: id});
    this.articleService.addArticle(this.articleForm.value).subscribe(async data => {
      console.log(data);
      const toast = await this.toast.create({
        message: 'Un article crée',
        duration: 3000
      });
      toast.present();
      this.articleForm.reset();
      this.router.navigateByUrl('gerer-articles');
    });
  }

  // openFile() {
  //   this.fileInput.getInputElement().then(el => {
  //     el.click();
  //   });
  // }

  clickImage(i: number) {
    this.imageSelected = this.images[i];
    this.articleForm.controls.urlImage.setValue(this.images[i]);
  }
}
