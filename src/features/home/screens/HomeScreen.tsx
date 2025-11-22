import React from "react";
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors } from "../../../theme";
import { CategoryOverlay } from "../components/CategoryOverlay";
import { CategoryTabs } from "../components/CategoryTabs";
import { HomeHeader } from "../components/HomeHeader";
import { HomeHighlights } from "../components/HomeHighlights";
import { ProfileDrawer } from "../components/ProfileDrawer";
import {
  bestSellers,
  featuredPromos,
  homeCategories,
  recommendedItems,
} from "../data/homeContent";
import { useCategorySelection } from "../hooks/useCategorySelection";
import { useHomeHeaderAnimation } from "../hooks/useHomeHeaderAnimation";
import { useProfileDrawer } from "../hooks/useProfileDrawer";

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

  const {
    isDrawerVisible,
    drawerWidth,
    drawerTranslateX,
    drawerBackdropOpacity,
    openDrawer,
    closeDrawer,
  } = useProfileDrawer();

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
            onProfilePress={openDrawer}
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
              scrollEnabled={!isOverlayActive && !isDrawerVisible}
              bounces={!isOverlayActive && !isDrawerVisible}
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
      {isDrawerVisible ? (
        <View style={styles.drawerOverlay} pointerEvents="box-none">
          <Pressable style={styles.drawerScrimPressable} onPress={closeDrawer}>
            <Animated.View
              pointerEvents="none"
              style={[styles.drawerScrim, { opacity: drawerBackdropOpacity }]}
            />
          </Pressable>
          <Animated.View
            style={[
              styles.drawerPanel,
              {
                width: drawerWidth,
                transform: [{ translateX: drawerTranslateX }],
              },
            ]}
          >
            <ProfileDrawer />
          </Animated.View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.accentYellow,
    position: "relative",
  },
  topSafeArea: {
    backgroundColor: AppColors.accentYellow,
  },
  keyboardAvoid: {
    flex: 1,
  },
  container: {
    flex: 1,
    position: "relative",
  },
  card: {
    flex: 1,
    backgroundColor: AppColors.backgroundLight,
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
  drawerOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  drawerScrimPressable: {
    ...StyleSheet.absoluteFillObject,
  },
  drawerScrim: {
    flex: 1,
    backgroundColor: AppColors.black,
  },
  drawerPanel: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    shadowColor: AppColors.black,
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: -4, height: 0 },
    elevation: 12,
  },
});

export default HomeScreen;
