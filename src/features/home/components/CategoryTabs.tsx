import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColors } from "../../../theme";
import { Category } from "@/models/category.model";

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string | null;
  onSelect: (categoryId: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onSelect,
}) => {
  return (
    <View style={styles.tabRow}>
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <TouchableOpacity
            key={category.id}
            style={[styles.tab, isActive && styles.tabActive]}
            onPress={() => onSelect(category.id)}
          >
            <Image
              source={category.image}
              style={[styles.tabIcon, isActive && styles.tabIconActive]}
              resizeMode="contain"
            />
            <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
              {category.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    padding: 0,
    borderRadius: 24,
    shadowColor: AppColors.black,
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  tab: {
    flex: 1,
    marginHorizontal: 4,
    borderTopLeftRadius: 999,
    borderTopRightRadius: 999,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: "transparent",
  },
  tabActive: {
    backgroundColor: AppColors.white,
    shadowColor: AppColors.accentYellow,
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  tabIcon: {
    width: 60,
    height: 60,
    opacity: 0.7,
    marginBottom: 2,
  },
  tabIconActive: {
    opacity: 1,
  },
  tabLabel: {
    fontSize: 12,
    color: AppColors.textDark,
    fontWeight: "400",
  },
  tabLabelActive: {
    color: AppColors.textDark,
  },
});
