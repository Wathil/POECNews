export class Commentaire {
    id!: number; // clé Primaire 
    userId!: number; // Clé secondaire
    articleId!: number; // Clé secondaire
    contenu!: string;
}