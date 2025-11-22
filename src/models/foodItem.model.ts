export interface FoodItem {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
  isFavorite: boolean;
  description?: string;
}
