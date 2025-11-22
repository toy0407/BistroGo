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
import { BottomNavBar } from "../components/BottomNavBar";
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

const navItems = [
  { id: "home", label: "Home", icon: require("@assets/icons/home.png") },
  { id: "dishes", label: "Dishes", icon: require("@assets/icons/menu.png") },
  {
    id: "favorites",
    label: "Favorites",
    icon: require("@assets/icons/favorites.png"),
  },
  {
    id: "orders",
    label: "Orders",
    icon: require("@assets/icons/clipboard.png"),
  },
  {
    id: "support",
    label: "Support",
    icon: require("@assets/icons/support.png"),
  },
];

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
  const [activeNavItem, setActiveNavItem] = React.useState(navItems[0].id);

  const handleNavSelect = React.useCallback((id: string) => {
    setActiveNavItem(id);
  }, []);

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
      <View style={styles.bottomNavWrapper} pointerEvents="box-none">
        <BottomNavBar
          items={navItems}
          activeId={activeNavItem}
          onSelect={handleNavSelect}
        />
      </View>
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
    paddingBottom: 140,
  },
  overlayScrollContent: {
    paddingHorizontal: 0,
    flexGrow: 1,
    paddingBottom: 140,
  },
  scrollArea: {
    flex: 1,
  },
  bottomNavWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
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
