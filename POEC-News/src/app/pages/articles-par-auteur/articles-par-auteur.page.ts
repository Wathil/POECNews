import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/classes/Article';
import { User } from 'src/app/classes/User';
import { ArticleService } from 'src/app/shared/article.service';
import { CategoryService } from 'src/app/shared/category.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-articles-par-auteur',
  templateUrl: './articles-par-auteur.page.html',
  styleUrls: ['./articles-par-auteur.page.scss'],
})
export class ArticlesParAuteurPage implements OnInit {

  articles: Article[] = [];
  auteurs: User[] = [];
  auteur!: User;
  loginName!: string;
  userId!: number;

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private zone: NgZone) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.userId = this.activatedRoute.snapshot.params['userId'];
    this.reloadData();
  }

  reloadData() {
    this.userService.getRedacteurs().subscribe(data => {
      this.auteurs = data;
    });

    this.userService.getRedacteur(this.userId).subscribe(data => {
      this.auteur = data;
      this.loginName = data.loginName;
    });

    this.articleService.getArticlesParAuteur(this.userId).subscribe(data => {
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

  changeSelection(i: number) {
  }

  afficheParAuteur(userId: number) {
    this.zone.run(() => this.router.navigateByUrl(`/articles-par-auteur/` + userId));
  }

  afficheParCategory(categoryId: number) {
    this.zone.run(() => this.router.navigateByUrl(`/articles-par-categorie/` + categoryId));
  }

}
