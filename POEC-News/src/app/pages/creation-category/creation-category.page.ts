import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Category } from 'src/app/classes/Category';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-creation-category',
  templateUrl: './creation-category.page.html',
  styleUrls: ['./creation-category.page.scss'],
})
export class CreationCategoryPage implements OnInit {
  category: Category;

  categoryForm = this.formBuilder.group({
    id: [null],
    tag: [''],
    description: ['']
  })

  constructor(private router: Router,
    private categoryService: CategoryService,
    private toast: ToastController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  saveCategory() {
    this.categoryService.addCategory(this.categoryForm.value).subscribe(async data => {
      console.log(data);
      let toast = await this.toast.create({
        message: 'Une catégorie ajoutée',
        duration: 3000
      });
      toast.present();
      this.categoryForm.reset();
      this.router.navigateByUrl('gerer-categories');
    })
  }

}
