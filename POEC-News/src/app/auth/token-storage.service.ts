import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken'; // save token
const LOGINNAME_KEY = 'AuthLoginName'; // save login name
const EMAIL_KEY = 'AuthUserEmailname'; // save email 
const ROLES_KEY = 'AuthRoles'; // {ROLE_ADMINISTRATEUR, ROLE_REDACTEUR, ROLE_UTILISATEUR}

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() { }

  public signOut() {
    console.log("LOGOUT");
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveLoginName(loginName: string) {
    window.sessionStorage.removeItem(LOGINNAME_KEY);
    window.sessionStorage.setItem(LOGINNAME_KEY, loginName);
  }

  public getLoginName(): string {
    return sessionStorage.getItem(LOGINNAME_KEY);
  }

  public saveEmail(email: string) {
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY, email);
  }

  public getEmail(): string {
    return sessionStorage.getItem(EMAIL_KEY);
  }

  public saveRoles(roles: string[]) {
    window.sessionStorage.removeItem(ROLES_KEY);
    window.sessionStorage.setItem(ROLES_KEY, JSON.stringify(roles));
  }

  public getRoles(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(ROLES_KEY)).forEach(role => {
        this.roles.push(role.role);
      });
    }

    return this.roles;
  }
}
