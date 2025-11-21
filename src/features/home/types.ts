import { ImageSourcePropType } from "react-native";

export interface FoodItem {
  id: string;
  title: string;
  price: number;
  image: string;
  rating?: number;
  description?: string;
}

export interface Category {
  id: string;
  label: string;
  image: ImageSourcePropType;
}

export interface FeaturedPromo {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface CategoryCatalog {
  [key: string]: FoodItem[];
}
