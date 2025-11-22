import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppColors } from "../../../theme";
import { FeaturedPromo } from "../types";
import { FoodItem } from "@/models/foodItem.model";
import { BestSellerCard } from "./BestSellerCard";
import { RecommendedCard } from "./RecommendedCard";

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

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.featuredContainer}
      >
        {featuredPromos.map((promo) => (
          <View key={promo.id} style={styles.featuredCard}>
            <Image source={{ uri: promo.image }} style={styles.featuredImage} />
            <View style={styles.featuredOverlay}>
              <Text style={styles.featuredTitle}>{promo.title}</Text>
              <Text style={styles.featuredDescription}>
                {promo.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

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
  featuredContainer: {
    paddingLeft: 8,
    paddingBottom: 24,
  },
  featuredCard: {
    width: 280,
    height: 150,
    marginRight: 16,
    borderRadius: 24,
    overflow: "hidden",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
  },
  featuredOverlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 16,
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: AppColors.white,
  },
  featuredDescription: {
    fontSize: 24,
    fontWeight: "900",
    color: AppColors.white,
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
