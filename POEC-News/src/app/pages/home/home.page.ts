import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Article } from 'src/app/classes/Article';
import { ArticleService } from 'src/app/shared/article.service';
import { CategoryService } from 'src/app/shared/category.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  articles: Article[] = [];
  info: any;

  constructor(
    private authService: AuthService,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private userService: UserService,
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.authService.isLogged()) {
      this.info = {
        loginName: this.authService.getLoginName()
      };
    }
    this.reloadData();
  }

  reloadData() {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
      for (let article of this.articles) {
        if (article.userId) {
          this.userService.getRedacteur(article.userId).subscribe(user => {
            article.author = user.loginName;
          })
        }
        if (article.categoryId) {
          this.categoryService.getCategory(article.categoryId).subscribe(category => {
            article.category = category.tag;
          })
        }
      }
    });
  }

  lireArticle(id: number) {
    this.router.navigateByUrl('/article/' + id);
  }

  afficheParAuteur(userId: number) {
    this.zone.run(() => this.router.navigateByUrl(`/articles-par-auteur/` + userId));
  }

  afficheParCategory(categoryId: number) {
    this.zone.run(() => this.router.navigateByUrl(`/articles-par-categorie/` + categoryId));
  }

}
