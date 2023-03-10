export interface Product {
	// Identifiant unique du produit
	id: string;
	// Nom du produit à afficher
	label: string;
	// Description du produit
	description: string;
	// Prix en centimes
	price: number;
	// Identifiant de la catégorie parente
	category_id: string;
	// URL vers l'image miniature
	thumbnail_url: string | null;
}
