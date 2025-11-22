import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppColors } from "../../../theme";
import { FeaturedPromo } from "../types";
import { FoodItem } from "@/models/foodItem.model";
import { BestSellerCard } from "./BestSellerCard";
import { RecommendedCard } from "./RecommendedCard";
import { FeaturedPromoCarousel } from "./FeaturedPromoCarousel";

interface HomeHighlightsProps {
  bestSellers: FoodItem[];
  featuredPromos: FeaturedPromo[];
  recommendedItems: FoodItem[];
}

export const HomeHighlights: React.FC<HomeHighlightsProps> = ({
  bestSellers,
  featuredPromos,
  recommendedItems,
}) => {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Seller</Text>
        <Text style={styles.sectionLink}>View All</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.bestSellerList}
      >
        {bestSellers.map((item) => (
          <BestSellerCard key={item.id} image={item.image} price={item.price} />
        ))}
      </ScrollView>

      <View style={styles.featuredCarouselSection}>
        <FeaturedPromoCarousel promos={featuredPromos} />
      </View>

      <View style={[styles.sectionHeader, styles.recommendHeader]}>
        <Text style={styles.sectionTitle}>Recommend</Text>
      </View>
      <View style={styles.recommendGrid}>
        {recommendedItems.map((item) => (
          <RecommendedCard
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            isFavorite={item.isFavorite}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: AppColors.textDark,
  },
  sectionLink: {
    fontSize: 12,
    fontWeight: "600",
    color: AppColors.background,
  },
  bestSellerList: {
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  featuredCarouselSection: {
    paddingVertical: 8,
  },
  recommendHeader: {
    marginTop: 12,
  },
  recommendGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 12,
  },
});
