import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { AppColors } from "../../../theme";

interface RecommendedCardProps {
  title: string;
  image: string;
  price: number;
  rating: number;
  isFavorite?: boolean;
}

export const RecommendedCard: React.FC<RecommendedCardProps> = ({
  title,
  image,
  price,
  rating,
  isFavorite = false,
}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={styles.imageBorder}
      >
        <View style={styles.overlay}>
          <View style={styles.metaColumn}>
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingText}>{rating.toFixed(1)} ⭐</Text>
            </View>
            <View style={[styles.favoriteBadge, styles.favoriteBadgeActive]}>
              <Text
                style={[
                  styles.favoriteEmoji,
                  !isFavorite && styles.favoriteEmojiInactive,
                ]}
              >
                {isFavorite ? "❤️" : "🩶"}
              </Text>
            </View>
          </View>
          <View style={styles.priceTag}>
            <Text style={styles.priceText}>${price.toFixed(2)}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    marginBottom: 12,
    borderRadius: 22,
    overflow: "hidden",
    shadowColor: AppColors.black,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    flex: 1,
    width: "100%",
    minHeight: 160,
  },
  imageBorder: {
    borderRadius: 22,
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.15)",
  },
  metaColumn: {
    position: "absolute",
    top: 10,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingBadge: {
    backgroundColor: AppColors.white,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "600",
    color: AppColors.textDark,
  },
  favoriteBadge: {
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  favoriteBadgeActive: {
    backgroundColor: AppColors.white,
  },
  favoriteEmoji: {
    fontSize: 10,
  },
  favoriteEmojiInactive: {
    color: AppColors.greyLight,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: AppColors.white,
    marginRight: 8,
  },
  priceTag: {
    position: "absolute",
    bottom: 12,
    right: 0,
    backgroundColor: AppColors.background,
    paddingHorizontal: 2,
    paddingVertical: 4,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  priceText: {
    fontSize: 12,
    fontWeight: "400",
    color: AppColors.white,
  },
});
