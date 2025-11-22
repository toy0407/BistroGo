import { FoodItem } from "@/models/foodItem.model";
import { CategoryCatalog, FeaturedPromo } from "../types";
import { Category } from "@/models/category.model";

const snackImage = require("@assets/images/snacks.png");
const mealImage = require("@assets/images/meal.png");
const veganImage = require("@assets/images/vegan.png");
const dessertImage = require("@assets/images/dessert.png");
const drinksImage = require("@assets/images/drinks.png");

export const homeCategories: Category[] = [
  {
    id: "snacks",
    label: "Snacks",
    image: snackImage,
  },
  {
    id: "meal",
    label: "Meal",
    image: mealImage,
  },
  {
    id: "vegan",
    label: "Vegan",
    image: veganImage,
  },
  {
    id: "dessert",
    label: "Dessert",
    image: dessertImage,
  },
  {
    id: "drinks",
    label: "Drinks",
    image: drinksImage,
  },
];

export const bestSellers: FoodItem[] = [
  {
    id: "bs-1",
    title: "Salmon Sushi",
    price: 10.3,
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "bs-2",
    title: "Quinoa Bowl",
    price: 12.5,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=60",
  },
  {
    id: "bs-3",
    title: "Garden Lasagna",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1730900737654-ac6d843139da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "bs-4",
    title: "Berry Cupcake",
    price: 8.2,
    image:
      "https://plus.unsplash.com/premium_photo-1661591379945-6b7bf9ecfcc7?q=80&w=1319&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const featuredPromos: FeaturedPromo[] = [
  {
    id: "ft-1",
    title: "Experience our delicious new dish",
    description: "30% OFF",
    image:
      "https://images.unsplash.com/photo-1548365328-8b1599766c68?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: "ft-2",
    title: "Chef's Specials just for you",
    description: "Limited time",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
  },
];

export const recommendedItems: FoodItem[] = [
  {
    id: "rec-1",
    title: "Spicy Burger",
    price: 10,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "rec-2",
    title: "Spring Rolls",
    price: 25,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "rec-3",
    title: "Breakfast Bowl",
    price: 14.5,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "rec-4",
    title: "Avocado Toast",
    price: 9.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=60",
  },
];

export const categoryCatalog: CategoryCatalog = {
  snacks: [
    {
      id: "sn-1",
      title: "Crunchy Nachos",
      price: 7.5,
      image:
        "https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=3700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      description: "Tortilla chips with toppins",
    },
    {
      id: "sn-2",
      title: "Stuffed Jalapenos",
      price: 6.2,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
      rating: 4.8,
      description: "Cheesy peppers with herbs",
    },
  ],
  meal: [
    {
      id: "ml-1",
      title: "Teriyaki Bowl",
      price: 15.2,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=60",
      rating: 4.9,
      description: "Glazed salmon with jasmine rice",
    },
    {
      id: "ml-2",
      title: "Roasted Salmon",
      price: 18.4,
      image:
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=600&q=60",
      rating: 5,
      description: "Herb crusted salmon filet",
    },
  ],
  vegan: [
    {
      id: "vg-1",
      title: "Tofu Poke Bowl",
      price: 13.9,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
      rating: 4.7,
      description: "Marinated tofu with veggies",
    },
    {
      id: "vg-2",
      title: "Rainbow Salad",
      price: 11.4,
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=60",
      rating: 4.6,
      description: "Crisp greens and citrus",
    },
  ],
  dessert: [
    {
      id: "ds-1",
      title: "Lemon Tart",
      price: 8.4,
      image:
        "https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=600&q=60",
      rating: 4.9,
      description: "Buttery crust with citrus curd",
    },
    {
      id: "ds-2",
      title: "Chocolate Cake",
      price: 9.5,
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=60",
      rating: 5,
      description: "Rich cocoa sponge",
    },
  ],
  drinks: [
    {
      id: "dr-1",
      title: "Iced Latte",
      price: 4.5,
      image:
        "https://images.unsplash.com/photo-1459257868276-5e65389e2722?auto=format&fit=crop&w=600&q=60",
      rating: 4.8,
      description: "Cold brew with milk",
    },
    {
      id: "dr-2",
      title: "Berry Smoothie",
      price: 6.7,
      image:
        "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=600&q=60",
      rating: 4.9,
      description: "Mixed berries and yogurt",
    },
  ],
};
