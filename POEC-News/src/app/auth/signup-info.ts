export class SignUpInfo {
    loginName: string;
    email: string;
    password: string;
    roles: string[];

    constructor(loginName: string, email: string, password: string, roles: string[]) {
        this.loginName = loginName;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
}