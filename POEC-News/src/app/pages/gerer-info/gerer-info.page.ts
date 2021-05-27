import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-gerer-info',
  templateUrl: './gerer-info.page.html',
  styleUrls: ['./gerer-info.page.scss'],
})
export class GererInfoPage implements OnInit {

  editForm: FormGroup;
  id: any;

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
    })
  }
  
  saveForm(){
    this.userService.updateUser(this.id, this.editForm.value).subscribe(async data => {
      let toast = await this.toast.create({
        message: 'Informations modifiées',
        duration: 3000
      });
      toast.present();
      // this.zone.run(() => this.router.navigate(['gerer-utilisateurs']));
    })
  }
}
