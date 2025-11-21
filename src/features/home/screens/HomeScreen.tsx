import React from "react";
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors } from "../../../theme";
import { CategoryOverlay } from "../components/CategoryOverlay";
import { CategoryTabs } from "../components/CategoryTabs";
import { HomeHeader } from "../components/HomeHeader";
import { HomeHighlights } from "../components/HomeHighlights";
import {
  bestSellers,
  featuredPromos,
  homeCategories,
  recommendedItems,
} from "../data/homeContent";
import { useCategorySelection } from "../hooks/useCategorySelection";
import { useHomeHeaderAnimation } from "../hooks/useHomeHeaderAnimation";

const HomeScreen: React.FC = () => {
  const {
    activeCategory,
    categoryItems,
    selectedCategoryLabel,
    isOverlayActive,
    handleCategoryPress,
  } = useCategorySelection();

  const {
    scrollHandler,
    searchTranslateY,
    greetingOpacity,
    greetingHeight,
    greetingTranslate,
    cardLift,
  } = useHomeHeaderAnimation(activeCategory);

  return (
    <View style={styles.safeArea}>
      <SafeAreaView style={styles.topSafeArea} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoid}
      >
        <View style={styles.container}>
          <HomeHeader
            searchTranslateY={searchTranslateY}
            greetingOpacity={greetingOpacity}
            greetingHeight={greetingHeight}
            greetingTranslate={greetingTranslate}
          />

          <Animated.View
            style={[
              styles.card,
              isOverlayActive && styles.cardOverlayActive,
              {
                marginTop: cardLift,
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                paddingTop: 24,
              },
            ]}
          >
            <CategoryTabs
              categories={homeCategories}
              activeCategory={activeCategory}
              onSelect={handleCategoryPress}
            />

            <Animated.ScrollView
              style={styles.scrollArea}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={scrollHandler}
              scrollEnabled={!isOverlayActive}
              bounces={!isOverlayActive}
              contentContainerStyle={
                !isOverlayActive
                  ? styles.defaultScrollContent
                  : styles.overlayScrollContent
              }
            >
              {!isOverlayActive ? (
                <HomeHighlights
                  bestSellers={bestSellers}
                  featuredPromos={featuredPromos}
                  recommendedItems={recommendedItems}
                />
              ) : (
                <CategoryOverlay
                  categoryName={selectedCategoryLabel}
                  items={categoryItems}
                />
              )}
            </Animated.ScrollView>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.accentYellow,
  },
  topSafeArea: {
    backgroundColor: AppColors.accentYellow,
  },
  keyboardAvoid: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: "#fffaf3",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  cardOverlayActive: {
    backgroundColor: AppColors.background,
    paddingHorizontal: 0,
  },
  defaultScrollContent: {
    paddingBottom: 48,
  },
  overlayScrollContent: {
    paddingHorizontal: 0,
    flexGrow: 1,
  },
  scrollArea: {
    flex: 1,
  },
});

export default HomeScreen;
