import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AccessService {
 
  private utilisateurrUrl = 'http://localhost:8080/test/user/';
  private redacteurUrl = 'http://localhost:8080/test/redacteur/';
  private administrateurUrl = 'http://localhost:8080/test/administrateur/';
 
  constructor(private http: HttpClient) { }
 
  getUserBoard(): Observable<string> {
    return this.http.get(this.utilisateurrUrl, { responseType: 'text' });
  }
 
  getPMBoard(): Observable<string> {
    return this.http.get(this.redacteurUrl, { responseType: 'text' });
  }
 
  getAdminBoard(): Observable<string> {
    return this.http.get(this.administrateurUrl, { responseType: 'text' });
  }
}