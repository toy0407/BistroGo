import React from "react";
import { categoryCatalog, homeCategories } from "../data/homeContent";
import { FoodItem } from "@/models/foodItem.model";

export const useCategorySelection = () => {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null
  );

  const handleCategoryPress = React.useCallback((categoryId: string) => {
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
  }, []);

  const categoryItems: FoodItem[] = React.useMemo(() => {
    if (!activeCategory) {
      return [];
    }

    return categoryCatalog[activeCategory] ?? [];
  }, [activeCategory]);

  const selectedCategoryLabel = React.useMemo(() => {
    if (!activeCategory) {
      return null;
    }

    return (
      homeCategories.find((category) => category.id === activeCategory)
        ?.label ?? null
    );
  }, [activeCategory]);

  return {
    activeCategory,
    categoryItems,
    selectedCategoryLabel,
    isOverlayActive: Boolean(activeCategory),
    handleCategoryPress,
  };
};
