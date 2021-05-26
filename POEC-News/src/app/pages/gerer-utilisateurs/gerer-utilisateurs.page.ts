import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Utilisateur } from 'src/app/classes/utilisateur';

@Component({
  selector: 'app-gerer-utilisateurs',
  templateUrl: './gerer-utilisateurs.page.html',
  styleUrls: ['./gerer-utilisateurs.page.scss'],
})
export class GererUtilisateursPage implements OnInit {

 hide = true;

  // utilisateurs: Array<Utilisateur> = new Array<Utilisateur>();

  utilisateurs: Array<Utilisateur> = [{
    id: 1,
    utilisateurloginname: "test1",
    email: "test1@test.com",
    password: "p1"
  }, {
    id: 2,
    utilisateurloginname: "test2",
    email: "test2@test.com",
    password: "p2"


  }];

  utilisateurForm = this.formBuilder.group({
    id: [null],
    utilisateurloginname: [''],
    email: [''],
    password: ['']
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.utilisateurs.length);
    this.reloadData();
  }

  reloadData() {
    console.log("reloadData");
  }

  ajouterUtilisateur() {
    console.log("ajouterUtilisateur");
    this.hide = !this.hide;
  }

  saveUtilisateur() {
    console.log("saveUtilisateur");
  }

  deleteUtilisateur(id: number) {
    console.log("deleteUtilisateur");
  }

}
