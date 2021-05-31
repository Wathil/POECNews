import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-gerer-categorie',
  templateUrl: './gerer-categorie.page.html',
  styleUrls: ['./gerer-categorie.page.scss'],
})
export class GererCategoriePage implements OnInit {


  editForm: FormGroup;
  id: any;

  constructor(private router : Router,
    private actRoute: ActivatedRoute,
    private formBuilder : FormBuilder,
    private zone: NgZone,
    private toast : ToastController,
    private categoryService : CategoryService
    ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [''],
      tag: [''],
      description: [''],
    })

    this.id = this.actRoute.snapshot.params['id'];
    console.log(this.id);

    this.categoryService.getCategory(this.id).subscribe(data =>{
      console.log(data);
      this.editForm.patchValue({
        id: this.id,
        tag: data.tag,
        description: data.description,
      })
    })
  }
  
  saveForm(){
    this.categoryService.updateCategory(this.id, this.editForm.value).subscribe(async data => {
      console.log(data);
      let toast = await this.toast.create({
        message: 'Catégorie modifiée.',
        duration: 3000
      });
      toast.present();
      this.zone.run(() => this.router.navigate([`gerer-categories`]));
    })
  }

}
