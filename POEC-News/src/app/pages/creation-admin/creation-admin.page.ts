import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/classes/User';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-creation-admin',
  templateUrl: './creation-admin.page.html',
  styleUrls: ['./creation-admin.page.scss'],
})
export class CreationAdminPage implements OnInit {
  user: User;

  userForm = this.formBuilder.group({
    id: [null],
    loginName: [''],
    email: [''],
    password: [''],
    category: [null]
  })

  constructor(private router: Router, 
    private userService: UserService, 
    private toast: ToastController,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,

    ) { }

  ngOnInit() {
    this.user = this.userService.user.getValue() || new User(null);
  }


  saveUser() {
    this.userService.addUser(this.userForm.value).subscribe(async data => {
      console.log(data);
      let toast = await this.toast.create({        
        message: 'Un user ajouté',
        duration: 3000        
      });
      toast.present();
      this.userForm.reset();
    })    
  }

}
