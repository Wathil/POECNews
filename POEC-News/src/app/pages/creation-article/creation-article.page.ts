import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Article } from 'src/app/classes/Article';
import { User } from 'src/app/classes/User';
import { ArticleService } from 'src/app/shared/article.service';
import { CategoryService } from 'src/app/shared/category.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-creation-article',
  templateUrl: './creation-article.page.html',
  styleUrls: ['./creation-article.page.scss'],
})
export class CreationArticlePage implements OnInit {
  article: Article;

  articleForm = this.formBuilder.group({
    id: [null],
    author: [''],
    titre: [''],
    category: [''],
    contenu: [''],
    image: ['']
  })

  @ViewChild("file", {static: true}) fileInput:any;

  categories: any;

  user: User;

  constructor(private router: Router, 
    private toast: ToastController,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private userService: UserService

    ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(cat => {
      this.categories = cat;
    });

    this.user = this.userService.user.getValue();
    this.articleForm.patchValue({author: this.user.loginName});
  }


  saveArticle() {
    this.articleService.addArticle(this.articleForm.value).subscribe(async data => {
      console.log(data);
      let toast = await this.toast.create({        
        message: 'Un article crée',
        duration: 3000        
      });
      toast.present();
      this.articleForm.reset();      
      this.router.navigateByUrl("gerer-articles");
    })    
  }

  openFile(){
    this.fileInput.getInputElement().then(el => {
      el.click();
    });
  }

}
