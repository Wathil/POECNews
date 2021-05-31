import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/classes/Article';
import { ArticleService } from 'src/app/shared/article.service';
import { CategoryService } from 'src/app/shared/category.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  id: any;
  article: Article;

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.articleService.getArticle(this.id).subscribe(data => {
      this.article = data;
      if (this.article.userId) {
        this.userService.getRedacteur(this.article.userId).subscribe(user => {
          this.article.author = user.penName;
        })
      }
      if (this.article.categoryId) {
        this.categoryService.getCategory(this.article.categoryId).subscribe(category => {
          this.article.category = category.tag;
        })
      }
    })
  }


}
