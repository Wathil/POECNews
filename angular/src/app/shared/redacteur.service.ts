import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Redacteur } from '../interfaces/redacteur';

@Injectable({
  providedIn: 'root'
})
export class RedacteurService {

  url: string = 'http://localhost:8080/redacteurs';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  redacteurs : Array<Redacteur> = new Array<Redacteur>();

  constructor(private http: HttpClientModule) { }

  addRedacteur() {
    
  }

}
