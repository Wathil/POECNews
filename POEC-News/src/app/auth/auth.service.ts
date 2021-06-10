import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const TOKEN_KEY = 'AuthToken'; // save token

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  private userLogged: JwtResponse = null;

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

  setJwtResponse(jwtResponse: JwtResponse) {
    Object.keys(jwtResponse.roles).map(key => console.log(jwtResponse.roles[key]));

    if (jwtResponse && jwtResponse.roles) {
      this.userLogged = jwtResponse;
      const role = jwtResponse.roles[0];
      switch (role) {
        case 'utilisateur': {
          jwtResponse.categoryId = "2";
          break;
        }
        case 'redacteur': {
          jwtResponse.categoryId = "1";
          break;
        }
        case 'administrateur': {
          jwtResponse.categoryId = "0";
          break;
        }
        default: {
          jwtResponse.categoryId = "2";
          break;
        }
      }
    }
  }

  public isLogged(): boolean {
    return (this.userLogged != null);
  }

  public getId(): string {
    if (this.userLogged == null)
      return null;

    return this.userLogged.id;
  }

  public getLoginName(): string {
    if (this.userLogged == null)
      return null;

    return this.userLogged.loginName;
  }

  public getEmail(): string {
    if (this.userLogged == null)
      return null;

    return this.userLogged.email;
  }

  public getCategoryId(): string {
    if (this.userLogged == null)
      return null;

    return this.userLogged.categoryId;
  }

  public isUtilisateur(): boolean {
    if (this.userLogged == null)
      return false;

    if (this.isRedacteur())
      return true;

    var catId = +this.userLogged.categoryId;
    return catId == 2;
  }

  public isRedacteur(): boolean {
    if (this.userLogged == null)
      return false;

    if (this.isAdministrateur())
      return true;

    var catId = +this.userLogged.categoryId;
    return catId == 1;
  }

  public isAdministrateur(): boolean {
    if (this.userLogged == null)
      return false;

    var catId = +this.userLogged.categoryId;
    return catId == 0;
  }

  logout() { // from tutorial angular
    window.sessionStorage.clear();
    this.userLogged = null;
  }
}