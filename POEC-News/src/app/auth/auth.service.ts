import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false; // from tutorial angular

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  private loginUrl = 'http://localhost:8080/auth/signin/';
  private signupUrl = 'http://localhost:8080/auth/signup/';

  constructor(private http: HttpClient) {
  }

  // this.httpClient
  // .get("data-url")
  // .subscribe(
  //   data => console.log('success', data),
  //   error => console.log('oops', error)
  // );

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  // logout() { // from tutorial angular
  //   this.tokenStorage.signOut();
  //   window.location.reload();
  // }
}