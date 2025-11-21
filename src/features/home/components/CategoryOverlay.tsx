import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppColors } from "../../../theme";
import { FoodItem } from "@models/foodItem.model";

interface CategoryOverlayProps {
  categoryName: string | null;
  items: FoodItem[];
}

export const CategoryOverlay: React.FC<CategoryOverlayProps> = ({
  categoryName,
  items,
}) => {
  if (!categoryName) {
    return null;
  }

  return (
    <View style={styles.overlayWrapper}>
      <View style={styles.overlaySheet}>
        <View style={styles.overlayHeaderRow}>
          <View style={styles.sortRow}>
            <Text style={styles.sortLabel}>Sort By</Text>
            <TouchableOpacity>
              <Text style={styles.sortChipText}>Popular</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.overlayLink}>Filter</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.overlayListContent}
          nestedScrollEnabled
        >
          {items.map((item) => (
            <View key={item.id} style={styles.categoryListCard}>
              <Image
                source={{ uri: item.image }}
                style={styles.categoryListImage}
              />
              <View style={styles.categoryListBody}>
                <View style={styles.categoryListTitleRow}>
                  <View style={styles.categoryListTitleGroup}>
                    <Text style={styles.categoryListTitle}>{item.title}</Text>
                    {item.rating ? (
                      <View style={styles.ratingBadge}>
                        <Text style={styles.ratingBadgeText}>
                          {item.rating.toFixed(1)} ⭐️
                        </Text>
                      </View>
                    ) : null}
                  </View>
                  <Text style={styles.categoryListPrice}>
                    ${item.price.toFixed(2)}
                  </Text>
                </View>
                {item.description ? (
                  <Text
                    style={styles.categoryListDescription}
                    numberOfLines={2}
                  >
                    {item.description}
                  </Text>
                ) : null}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlayWrapper: {
    position: "relative",
    flex: 1,
  },
  overlaySheet: {
    backgroundColor: AppColors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
    paddingHorizontal: 20,
    shadowColor: AppColors.black,
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
    marginTop: 0,
    flexGrow: 1,
    flex: 1,
  },
  overlayListContent: {
    paddingBottom: 24,
  },
  overlayHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  overlayLink: {
    fontSize: 14,
    color: AppColors.background,
    fontWeight: "300",
  },
  sortRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sortLabel: {
    fontSize: 12,
    color: AppColors.textDark,
    marginRight: 6,
  },
  sortChipText: {
    fontSize: 12,
    fontWeight: "300",
    color: AppColors.background,
  },
  categoryListCard: {
    backgroundColor: AppColors.white,
    borderRadius: 24,
    padding: 12,
    marginBottom: 16,
    shadowColor: AppColors.black,
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  categoryListImage: {
    width: "100%",
    height: 175,
    borderRadius: 20,
  },
  categoryListBody: {
    paddingTop: 12,
  },
  categoryListTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryListTitleGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    flexShrink: 1,
  },
  categoryListTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: AppColors.textDark,
    flexShrink: 1,
  },
  categoryListPrice: {
    fontSize: 18,
    fontWeight: "400",
    color: AppColors.background,
  },
  categoryListDescription: {
    marginTop: 6,
    color: "#6a5b50",
  },
  ratingBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: AppColors.background,
  },
  ratingBadgeText: {
    fontSize: 12,
    fontWeight: "400",
    color: AppColors.white,
  },
});
