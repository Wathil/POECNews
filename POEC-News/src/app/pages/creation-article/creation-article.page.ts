import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Article } from 'src/app/classes/Article';
import { ArticleService } from 'src/app/shared/article.service';

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
    contenu: ['']
  })

  constructor(private router: Router, 
    private toast: ToastController,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private articleService: ArticleService

    ) { }

  ngOnInit() {
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


}
