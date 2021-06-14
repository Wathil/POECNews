import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/classes/User';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-gerer-utilisateur',
  templateUrl: './gerer-utilisateur.page.html',
  styleUrls: ['./gerer-utilisateur.page.scss'],
})
export class GererUtilisateurPage implements OnInit {

  editForm: FormGroup;
  id: any;
  userCategory: number;
  toggle: boolean = false;

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
      password2: ['']
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

  toggleChange() {
    if (this.toggle) {
      this.toggle = false;
      this.editForm.controls.password.setValue('');
      this.editForm.controls.password2.setValue('');
    }
    else {
      this.toggle = true;
    }
  }
  
  saveForm() {
    if (this.toggle) {

      if (this.editForm.controls.password.value !== this.editForm.controls.password2.value) {
        this.editForm.controls.password.setValue('');
        this.editForm.controls.password2.setValue('');
        this.toast.create({
          message: 'Les 2 mots de passe sont différents',
          duration: 3000
        }).then(res => res.present());
      }
      else {
        let user: User = new User(this.id, this.editForm.controls.loginName.value, this.editForm.controls.email.value, this.editForm.controls.password.value, this.userCategory);
        this.userService.updateUserWithPassword(this.id, user).subscribe(async data => {
          let toast = await this.toast.create({
            message: 'Informations modifiées',
            duration: 3000
          });
          toast.present();
          this.zone.run(() => this.router.navigate([`gerer-utilisateurs`]));
        });
      }
    }
    else {
      let user: User = new User(this.id, this.editForm.controls.loginName.value, this.editForm.controls.email.value, null, this.userCategory);
      this.userService.updateUser(this.id, user).subscribe(async data => {
        let toast = await this.toast.create({
          message: 'Informations modifiées',
          duration: 3000
        });
        toast.present();
        this.zone.run(() => this.router.navigate([`gerer-utilisateurs`]));
      });
    }
  }
}
