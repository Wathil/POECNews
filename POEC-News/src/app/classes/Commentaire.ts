export class Commentaire {
    id!: number; // clé Primaire 
    userId!: number; // Clé secondaire
    articleId!: number; // Clé secondaire
    resId!: number;
    response!: Commentaire;
    contenu!: string;
    createdAt: Date;

    constructor(commentaire: any) {
        if (commentaire) {
            this.id = commentaire.id;
            this.userId = commentaire.userId;
            this.articleId = commentaire.articleId;
            this.resId = commentaire.resId;
            this.response = commentaire.response;
            this.contenu = commentaire.contenu;
        }
    }
}