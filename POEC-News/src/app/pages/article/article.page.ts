import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Article } from 'src/app/classes/Article';
import { Commentaire } from 'src/app/classes/Commentaire';
import { ArticleService } from 'src/app/shared/article.service';
import { CategoryService } from 'src/app/shared/category.service';
import { CommentaireService } from 'src/app/shared/commentaire.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {

  @ViewChild('commentaire', { static: false }) commentaire: ElementRef;
  @ViewChild('response', { static: false }) response: ElementRef;
  @ViewChild('commentWrapper', { static: false }) commentWrapper: ElementRef;
  @ViewChild('commentButton', { static: false }) commentButton: ElementRef;

  id: any;
  article: Article;
  coms: Commentaire[] = [];
  hideComment = true;
  hideResponse = true;
  currentCommentId: number;
  isRedacteur: boolean;

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private userService: UserService,
    private commentaireService: CommentaireService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private zone: NgZone,
    private router: Router,
    private auth: AuthService,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.articleService.getArticle(this.id).subscribe(data => {
      if (data) {
        this.article = data;
        this.userService.getRedacteur(this.article.userId).subscribe(user => {
          this.article.author = user.loginName;
        });

        this.categoryService.getCategory(this.article.categoryId).subscribe(category => {
          this.article.category = category.tag;
        });
      }
      this.commentaireService.getCommentairesByArticleId(this.id).subscribe(com => {
        if (com) {
          com.forEach(c => {
            if (c.resId == null) {
              this.coms.push(c);
            } else {
              const comRes = this.coms.find(t => t.id === c.resId);
              comRes.response = c;
            }
          });
          this.coms.sort((a, b) => b.id - a.id);
        }
      });
    },
    async error => {
      const toast = await this.toast.create({
        message: `Vous n'êtes pas autorisé à voir ce contenu.`,
        duration: 3000
      });
      toast.present();
      this.zone.run(() => this.router.navigateByUrl(`home`));
    });
    this.isRedacteur = this.auth.isRedacteur();
  }

  comment(textComment: string) {
    if (textComment !== '') {
      const sendComment = new Commentaire({
        userId: this.authService.getId(),
        articleId: this.id,
        contenu: textComment
      });

      this.commentaireService.addCommentaire(sendComment).subscribe(newComment => {
        this.commentaire.nativeElement.value = '';
        this.coms.unshift(newComment);
        this.openComment();
      });
    }
  }

  afficheParAuteur(userId: number) {
    this.zone.run(() => this.router.navigateByUrl(`/articles-par-auteur/` + userId));
  }

  afficheParCategory(categoryId: number) {
    this.zone.run(() => this.router.navigateByUrl(`/articles-par-categorie/` + categoryId));
  }

  openComment() {
    this.hideComment = !this.hideComment;
  }

  openResponse(id: number) {
    this.hideResponse = !this.hideResponse;
    this.currentCommentId = id;
  }

  sendResponse(textResponse: string, comId: number) {
    if (textResponse !== '') {
      const sendResponse = new Commentaire({
        userId: this.authService.getId(),
        articleId: this.id,
        contenu: textResponse,
        resId: comId
      });

      this.commentaireService.addCommentaire(sendResponse).subscribe(newComment => {
        this.response.nativeElement.value = '';
        const com = this.coms.find(c => c.id === newComment.resId);
        com.response = newComment;
        this.openResponse(comId);
      });
    }
  }

}
