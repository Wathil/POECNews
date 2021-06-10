import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Article } from 'src/app/classes/Article';
import { Category } from 'src/app/classes/Category';
import { ArticleService } from 'src/app/shared/article.service';
import { CategoryService } from 'src/app/shared/category.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-articles-par-categorie',
  templateUrl: './articles-par-categorie.page.html',
  styleUrls: ['./articles-par-categorie.page.scss'],
})
export class ArticlesParCategoriePage implements OnInit {

  articles: Article[] = [];
  categories: Category[] = [];
  categorie!: Category;
  tag!: string;
  categoryId!: number;

  constructor(
    private tokenStorage: TokenStorageService,
    private articleService: ArticleService,
    private userService: UserService,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private zone: NgZone) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.categoryId = this.activatedRoute.snapshot.params['categoryId'];
    this.reloadData();
  }

  reloadData() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.categoryService.getCategory(this.categoryId).subscribe(categorie => {
      this.categorie = categorie;
      this.tag = categorie.tag;
    });

    this.articleService.getArticlesParCategorie(this.categoryId).subscribe(data => {
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
