import { FoodItem } from "@/models/foodItem.model";
import { ImageSourcePropType } from "react-native";

export interface FeaturedPromo {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface CategoryCatalog {
  [key: string]: FoodItem[];
}
