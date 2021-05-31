import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choisir-image',
  templateUrl: './choisir-image.page.html',
  styleUrls: ['./choisir-image.page.scss'],
})
export class ChoisirImagePage implements OnInit {

  tabs: string[] = [
    './assets/img/1.jpg',
    './assets/img/2.jpg',
    './assets/img/3.jpg',
    './assets/img/4.jpg',
    './assets/img/5.jpg',
  ];

  constructor() { }

  ngOnInit() {
  }

  clickImage(i: number) {
    console.log("url=" + this.tabs[i]);
  }

}
