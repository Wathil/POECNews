import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/classes/Article';
import { ArticleService } from 'src/app/shared/article.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {    
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  lireArticle(id){
    if(this.userService.user.getValue().id){
      this.router.navigateByUrl('/article/'+id);
    }else {
      this.router.navigateByUrl('/connexion');
    }
  }

}
