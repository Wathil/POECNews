import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/classes/User';

@Component({
  selector: 'app-gerer-redacteurs',
  templateUrl: './gerer-redacteurs.page.html',
  styleUrls: ['./gerer-redacteurs.page.scss'],
})
export class GererRedacteursPage implements OnInit {

  hide = true;

  // redacteurs: Array<Redacteur> = new Array<Redacteur>();

  redacteurs: Array<User> = [{
    id: 1,
    loginName: "test1",
    email: "test1@test.com",
    password: "p1",
    penName: "penName1",
    accredit: 1,
    category: 1
  }, {
    id: 2,
    loginName: "test2",
    email: "test2@test.com",
    password: "p2",
    penName: "penName2",
    accredit: 1,
    category: 1
  }];

  redacteurForm = this.formBuilder.group({
    id: [null],
    loginName: [''],
    email: [''],
    password: [''],
    penName: ['']
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.redacteurs.length);
    this.reloadData();
  }

  reloadData() {
    console.log("reloadData");
  }

  ajouterRedacteur() {
    console.log("ajouterRedacteur");
    this.hide = !this.hide; 
  }

  saveRedateur() {
    console.log("saveRedateur");
  }

  deleteRedacteur(id: number) {
    console.log("deleteRedacteur");
  }

}
