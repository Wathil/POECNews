import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { ChangePassword } from './ChangePassword';
import { map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};
const TOKEN_KEY = 'AuthToken'; // saved token

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store the URL so we can redirect after logging in
  public redirectUrl: string | null = null;

  private loginUrl = 'http://localhost:8080/auth/signin/';
  private signupUrl = 'http://localhost:8080/auth/signup/';
  private changePasswordUrl = 'http://localhost:8080/auth/cp/';
  private userLogged: JwtResponse = null;

  constructor(private http: HttpClient) {
  }

  public saveToken(token: string) { // nerver called
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> { // login => token
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  changePassword(info: ChangePassword): Observable<string> {
    return this.http.post<string>(this.changePasswordUrl, info, httpOptions);
  }

  setJwtResponse(jwtResponse: JwtResponse) {
    this.saveToken(jwtResponse.accessToken);

    Object.keys(jwtResponse.roles).map(key => console.log(jwtResponse.roles[key]));

    if (jwtResponse && jwtResponse.roles) {
      this.userLogged = jwtResponse;
      const role = jwtResponse.roles[0];
      switch (role) {
        case 'utilisateur': {
          jwtResponse.categoryId = '2';
          break;
        }
        case 'redacteur': {
          jwtResponse.categoryId = '1';
          break;
        }
        case 'administrateur': {
          jwtResponse.categoryId = '0';
          break;
        }
        default: {
          jwtResponse.categoryId = '2';
          break;
        }
      }
    }
  }

  isConnected() {
    if (Boolean(this.getToken()))
      return true;
    return false;
  }

  public getId(): string {
    if (this.userLogged == null) {
      return null;
    }

    return this.userLogged.id;
  }

  public getLoginName(): string {
    if (this.userLogged == null) {
      return null;
  }

    return this.userLogged.loginName;
  }

  public getEmail(): string {
    if (this.userLogged == null) {
      return null;
    }

    return this.userLogged.email;
  }

  public getCategoryId(): string {
    if (this.userLogged == null) {
      return null;
  }

    return this.userLogged.categoryId;
  }

  public isUtilisateur(): boolean {
    if (this.userLogged == null) {
      return false;
  }

    if (this.isRedacteur()) {
      return true;
}

    const catId = +this.userLogged.categoryId;
    return catId === 2;
  }

  public isRedacteur(): boolean {
    if (this.userLogged == null) {
      return false;
    }

    if (this.isAdministrateur()) {
      return true;
    }

    const catId = +this.userLogged.categoryId;
    return catId === 1;
  }

  public isAdministrateur(): boolean {
    if (this.userLogged == null) {
      return false;
    }

    const catId = +this.userLogged.categoryId;
    return catId === 0;
  }

  logout() { // from tutorial angular
    window.sessionStorage.clear();
    this.userLogged = null;
  }
}
