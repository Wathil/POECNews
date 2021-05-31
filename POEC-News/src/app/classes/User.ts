export class User {

    static readonly USER_CATEGORY_0 = 'administrateur';
    static readonly USER_CATEGORY_1 = 'redacteur';
    static readonly USER_CATEGORY_2 = 'utilisateur';

    id!: number; // clé Primaire 
    loginName!: string;
    email!: string;
    password!: string;
    accredit!: number;
    category!: number; // 0: Admin; 1: Rédacteur; 2: Utilisateur

    constructor(user: any) {
        if (user) {
            this.id = user.id;
            this.loginName = user.loginName;
            this.email = user.email;
            this.password = user.password;
            this.accredit = user.accredit;
            this.category = user.category;
        }
    }

    static getCategoryToString(category: number): string {
        switch (category) {
            case 0:
              return User.USER_CATEGORY_0;
            case 1:
              return User.USER_CATEGORY_1;
            case 2:
              return User.USER_CATEGORY_2;
        }
    }

    static defaultUser() {
      return new User({category: 3});
    }
}
