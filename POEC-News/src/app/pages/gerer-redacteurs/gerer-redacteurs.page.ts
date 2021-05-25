import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Redacteur } from 'src/app/classes/redacteur';

@Component({
  selector: 'app-gerer-redacteurs',
  templateUrl: './gerer-redacteurs.page.html',
  styleUrls: ['./gerer-redacteurs.page.scss'],
})
export class GererRedacteursPage implements OnInit {

  hide = true;

  // redacteurs: Array<Redacteur> = new Array<Redacteur>();

  redacteurs: Array<Redacteur> = [{
    id: 1,
    redacteurloginname: "test1",
    email: "test1@test.com",
    password: "p1"
  }, {
    id: 2,
    redacteurloginname: "test2",
    email: "test2@test.com",
    password: "p2"
  }];

  redacteurForm = this.formBuilder.group({
    id: [null],
    redacteurloginname: [''],
    email: [''],
    password: ['']
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
