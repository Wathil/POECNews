export class User {
    id!: number; // clé Primaire 
    loginName!: string;
    email!: string;
    password!: string;
    penName!: string; // For Redacteur Writer Author
    accredit!: number;
    category!: number; // 0: Admin; 1: Rédacteur; 2: Utilisateur
}
