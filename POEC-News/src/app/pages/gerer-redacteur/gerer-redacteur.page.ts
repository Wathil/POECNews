import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/classes/User';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-gerer-redacteur',
  templateUrl: './gerer-redacteur.page.html',
  styleUrls: ['./gerer-redacteur.page.scss'],
})
export class GererRedacteurPage implements OnInit {

  editForm: FormGroup;
  id: any;
  userCategory: number;

  constructor(private userService : UserService,
    private router : Router,
    private actRoute: ActivatedRoute,
    private formBuilder : FormBuilder,
    private zone: NgZone,
    private toast : ToastController
    ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      loginName: [''],
      email: [''],
      password: [''],
    })

    this.id = this.actRoute.snapshot.params['id'];

    this.userService.getUser(this.id).subscribe(data =>{
      console.log(data);
      this.editForm.patchValue({
        id: this.id,
        loginName: data.loginName,
        email: data.email,
        password: data.password,
      })
      this.userCategory = data.category;
    })
  }
  
  saveForm(){
    let category = User.getCategoryToString(this.userCategory);
    this.userService.updateUser(this.id, this.editForm.value).subscribe(async data => {
      console.log(data);
      let toast = await this.toast.create({
        message: 'Informations modifiées',
        duration: 3000
      });
      toast.present();
      this.zone.run(() => this.router.navigate([`gerer-${category}s`]));
    })
  }
}
