export class Article {
    id!: number; // clé Primaire
    userId!: number;
    categoryId!: number;
    titre!: string;
    contenu!: string;
    urlImage!: string;
    // Propriétés supplémentaires
    category!: string;
    author!: string;
}