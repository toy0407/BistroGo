import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppColors } from "../../../theme";
import { FeaturedPromo, FoodItem } from "../types";

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
          <View key={item.id} style={styles.bestSellerCard}>
            <Image
              source={{ uri: item.image }}
              style={styles.bestSellerImage}
            />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardPrice}>${item.price.toFixed(2)}</Text>
          </View>
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
          <View key={item.id} style={styles.recommendCard}>
            <Image source={{ uri: item.image }} style={styles.recommendImage} />
            <View style={styles.recommendBody}>
              <Text style={styles.recommendTitle} numberOfLines={1}>
                {item.title}
              </Text>
              {item.rating ? (
                <Text style={styles.recommendRating}>
                  ⭐ {item.rating.toFixed(1)}
                </Text>
              ) : null}
              <Text style={styles.recommendPrice}>
                ${item.price.toFixed(2)}
              </Text>
            </View>
          </View>
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
    color: AppColors.black,
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
  bestSellerCard: {
    width: 140,
    marginRight: 16,
    borderRadius: 18,
    backgroundColor: AppColors.white,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  bestSellerImage: {
    width: "100%",
    height: 90,
    borderRadius: 12,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3d2d1c",
  },
  cardPrice: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "700",
    color: AppColors.background,
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
  recommendCard: {
    width: "48%",
    marginBottom: 12,
    borderRadius: 18,
    backgroundColor: AppColors.white,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  recommendImage: {
    width: "100%",
    height: 110,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  recommendBody: {
    padding: 10,
  },
  recommendTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3d2d1c",
  },
  recommendRating: {
    marginTop: 4,
    fontSize: 12,
    color: "#f7b500",
  },
  recommendPrice: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "700",
    color: AppColors.background,
  },
});
