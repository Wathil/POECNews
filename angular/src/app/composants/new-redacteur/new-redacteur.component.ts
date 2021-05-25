import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Redacteur } from 'src/app/interfaces/redacteur';
import { RedacteurService } from 'src/app/shared/redacteur.service';

@Component({
  selector: 'app-new-redacteur',
  templateUrl: './new-redacteur.component.html',
  styleUrls: ['./new-redacteur.component.css']
})
export class NewRedacteurComponent implements OnInit {

  redacteur: Redacteur = {};
  redacteurs: Array<Redacteur> = new Array<Redacteur>();

  constructor(private route: ActivatedRoute, private router: Router, private redacteurService: RedacteurService) { }

  ngOnInit(): void {
  }

  saveRedacteur() {
    this.redacteurService.addRedacteur(); // subcribe...
  }

}
