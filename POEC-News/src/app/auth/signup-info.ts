export class SignUpInfo { // Seulement pour qu'un utilisateur s'enregistre
    loginName: string;
    email: string;
    password: string;
    role: string[];
 
    constructor(loginName: string, email: string, password: string) {
        this.loginName = loginName;
        this.email = email;
        this.password = password;
        this.role = ['utilisateur'];
    }
}