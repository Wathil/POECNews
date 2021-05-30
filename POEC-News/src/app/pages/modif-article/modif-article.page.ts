import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-modif-article',
  templateUrl: './modif-article.page.html',
  styleUrls: ['./modif-article.page.scss'],
})
export class ModifArticlePage implements OnInit {

  editForm: FormGroup;
  id: any;

  constructor(private router : Router,
    private actRoute: ActivatedRoute,
    private formBuilder : FormBuilder,
    private zone: NgZone,
    private toast : ToastController,
    private articleService : ArticleService
    ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      author: [''],
      titre: [''],
      contenu: [''],
    })

    this.id = this.actRoute.snapshot.params['id'];

    this.articleService.getArticle(this.id).subscribe(data =>{
      console.log(data);
      this.editForm.patchValue({
        id: this.id,
        author: data.author,
        titre: data.titre,
        contenu: data.contenu,
      })
    })
  }
  
  saveForm(){
    this.articleService.updateArticle(this.id, this.editForm.value).subscribe(async data => {
      console.log(data);
      let toast = await this.toast.create({
        message: 'Article modifié.',
        duration: 3000
      });
      toast.present();
      this.zone.run(() => this.router.navigate([`gerer-articles`]));
    })
  }

}
