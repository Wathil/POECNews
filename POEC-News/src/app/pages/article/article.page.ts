import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  @ViewChild('commentaire', {static: false}) textarea: any;

  id: any;
  article: Article;
  coms: Commentaire[] = [];

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private userService: UserService,
    private commentaireService: CommentaireService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.articleService.getArticle(this.id).subscribe(data => {
      if (data) {
        this.article = data;
        this.userService.getRedacteur(this.article.userId).subscribe(user => {
          this.article.author = user.loginName;
        })

        this.categoryService.getCategory(this.article.categoryId).subscribe(category => {
          this.article.category = category.tag;
        })
      }
      this.commentaireService.getCommentairesByArticleId(this.id).subscribe(com => {
        if (com) {
          console.log(com);
          com.forEach(c => {
            if (c.resId == null) {
              this.coms.push(c);
            } else {
              let comRes = this.coms.find(t => t.id == c.resId);
              comRes.response = c;
            }
          })
          this.coms.sort((a, b) => {
            return b.id - a.id;
          });
        }
      })
    })
  }

  comment(textComment) {
    if (textComment !== "") {
      const sendComment = new Commentaire({
        userId: this.userService.user.getValue().id,
        articleId: this.id,
        contenu: textComment        
      })
      console.log(this.userService.user.getValue().id);

      this.commentaireService.addCommentaire(sendComment).subscribe(newComment => {
        this.textarea.value = "";
        this.coms.unshift(newComment);
      });
    }
  }


}
