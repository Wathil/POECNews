import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/classes/Article';
import { ArticleService } from 'src/app/shared/article.service';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.articleService.getArticle(this.id).subscribe(data => {
      console.log(data);
      this.article = data;
    })
  }


}
