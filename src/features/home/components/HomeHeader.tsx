import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "react-native";
import { AppColors } from "../../../theme";

interface HomeHeaderProps {
  searchTranslateY: Animated.AnimatedInterpolation<number>;
  greetingOpacity: Animated.AnimatedInterpolation<number>;
  greetingHeight: Animated.AnimatedInterpolation<number>;
  greetingTranslate: Animated.AnimatedInterpolation<number>;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  searchTranslateY,
  greetingOpacity,
  greetingHeight,
  greetingTranslate,
}) => {
  return (
    <View style={styles.header}>
      <Animated.View
        style={[
          styles.searchRow,
          {
            transform: [{ translateY: searchTranslateY }],
          },
        ]}
      >
        <TextInput
          placeholder="Search"
          placeholderTextColor={AppColors.greyLight}
          style={styles.searchInput}
        />
        <View style={styles.iconRow}>
          <TouchableOpacity>
            <Image
              style={styles.headerIcon}
              source={require("@assets/icons/cart.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.headerIcon}
              source={require("@assets/icons/notification.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.headerIcon}
              source={require("@assets/icons/profile.png")}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.greetingBlock,
          {
            opacity: greetingOpacity,
            height: greetingHeight,
            transform: [{ translateY: greetingTranslate }],
          },
        ]}
      >
        <Text style={styles.greeting}>Good Morning</Text>
        <Text style={styles.subGreeting}>
          Rise and shine! It is breakfast time
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    zIndex: 3,
  },
  searchInput: {
    flex: 1,
    backgroundColor: AppColors.white,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: AppColors.textDark,
  },
  iconRow: {
    flexDirection: "row",
    gap: 8,
  },
  headerIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.white,
    shadowColor: AppColors.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  greetingBlock: {
    marginTop: 16,
    overflow: "hidden",
  },
  greeting: {
    marginTop: 12,
    fontSize: 30,
    fontWeight: "700",
    color: AppColors.white,
  },
  subGreeting: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: "500",
    color: AppColors.background,
  },
});
