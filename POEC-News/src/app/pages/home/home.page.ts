import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/classes/Article';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {    
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

}
