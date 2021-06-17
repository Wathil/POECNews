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

  form: FormGroup;
  id: any;
  userCategory: number;
  toggle: boolean = false;

  constructor(private userService: UserService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private zone: NgZone,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      loginName: [''],
      email: [''],
      password: [''],
      password2: ['']
    })

    this.id = this.actRoute.snapshot.params['id'];

    this.userService.getUser(this.id).subscribe(data => {
      console.log(data);
      this.form.patchValue({
        id: this.id,
        loginName: data.loginName,
        email: data.email,
        password: data.password,
        password2: data.password
      })
      this.userCategory = data.category;
    })
  }

  toggleChange() {
    if (this.toggle) {
      this.toggle = false;
      this.form.controls.password.setValue('');
      this.form.controls.password2.setValue('');
    }
    else {
      this.toggle = true;
    }
  }

  saveForm() {
    if (this.toggle) {

      if (this.form.controls.password.value !== this.form.controls.password2.value) {
        this.form.controls.password.setValue('');
        this.form.controls.password2.setValue('');
        this.toast.create({
          message: 'Les 2 mots de passe sont différents',
          duration: 3000
        }).then(res => res.present());
      }
      else {
        let user: User = new User(this.id, this.form.controls.loginName.value, this.form.controls.email.value, this.form.controls.password.value, this.userCategory);
        this.userService.updateUserWithPassword(this.id, user).subscribe(async data => {
          let toast = await this.toast.create({
            message: 'Informations modifiées',
            duration: 3000
          });
          toast.present();
          this.zone.run(() => this.router.navigate([`gerer-redacteurs`]));
        });
      }
    }
    else {
      let user: User = new User(this.id, this.form.controls.loginName.value, this.form.controls.email.value, null, this.userCategory);
      this.userService.updateUser(this.id, user).subscribe(async data => {
        let toast = await this.toast.create({
          message: 'Informations modifiées',
          duration: 3000
        });
        toast.present();
        this.zone.run(() => this.router.navigate([`gerer-redacteurs`]));
      });
    }
  }

}
