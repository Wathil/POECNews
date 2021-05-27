import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/classes/User';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-gerer-redacteurs',
  templateUrl: './gerer-redacteurs.page.html',
  styleUrls: ['./gerer-redacteurs.page.scss'],
})
export class GererRedacteursPage implements OnInit {

  hide = true;

  users: Array<User> = new Array<User>();

  userForm = this.formBuilder.group({
    id: [null],
    loginName: [''],
    email: [''],
    password: [''],
    penName: ['']
  })

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    console.log(this.users.length);
    this.reloadData();
  }

  ionViewWillEnter(){
    this.ngOnInit();
  }

  reloadData() {
    console.log("reloadData");
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  ajouterUser() {
    this.hide = !this.hide;
  }

  saveUser() {
    console.log("saveUser");
    this.userService.addUser(this.userForm.value).subscribe(async data => {
      console.log(data);
      this.reloadData();
      this.hide = !this.hide;
    });
  }

  deleteUser(id: number) {
    console.log("deleteUser");
    this.userService.deleteUser(id).subscribe(async data => {
      console.log(data);
    });
    this.reloadData();
  }

}
