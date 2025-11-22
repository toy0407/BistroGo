import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { AppColors } from "../../../theme";

interface BestSellerCardProps {
  image: string;
  price: number;
}

export const BestSellerCard: React.FC<BestSellerCardProps> = ({
  image,
  price,
}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
        imageStyle={styles.imageBorder}
      >
        <View style={styles.overlay}>
          <View style={styles.priceTag}>
            <Text style={styles.priceTagText}>${price.toFixed(2)}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 96,
    height: 144,
    marginRight: 16,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: AppColors.black,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    flex: 1,
    width: "100%",
  },
  imageBorder: {
    borderRadius: 20,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.15)",
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
  priceTagText: {
    fontSize: 12,
    fontWeight: "400",
    color: AppColors.white,
  },
});
