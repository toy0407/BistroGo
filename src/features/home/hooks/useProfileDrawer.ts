import React from "react";
import { Animated, Dimensions, Easing } from "react-native";

export const useProfileDrawer = () => {
  const drawerAnimation = React.useRef(new Animated.Value(0)).current;
  const [isDrawerVisible, setDrawerVisible] = React.useState(false);

  const drawerWidth = React.useMemo(
    () => Math.min(Dimensions.get("window").width * 0.84, 360),
    []
  );

  const animateDrawer = React.useCallback(
    (toValue: 0 | 1, onEnd?: () => void) => {
      Animated.timing(drawerAnimation, {
        toValue,
        duration: 260,
        easing: toValue ? Easing.out(Easing.cubic) : Easing.in(Easing.cubic),
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished && onEnd) {
          onEnd();
        }
      });
    },
    [drawerAnimation]
  );

  const openDrawer = React.useCallback(() => {
    if (isDrawerVisible) {
      return;
    }
    setDrawerVisible(true);
    animateDrawer(1);
  }, [animateDrawer, isDrawerVisible]);

  const closeDrawer = React.useCallback(() => {
    if (!isDrawerVisible) {
      return;
    }
    animateDrawer(0, () => setDrawerVisible(false));
  }, [animateDrawer, isDrawerVisible]);

  const drawerTranslateX = React.useMemo(
    () =>
      drawerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [drawerWidth, 0],
      }),
    [drawerAnimation, drawerWidth]
  );

  const drawerBackdropOpacity = React.useMemo(
    () =>
      drawerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.45],
      }),
    [drawerAnimation]
  );

  return {
    isDrawerVisible,
    drawerWidth,
    drawerTranslateX,
    drawerBackdropOpacity,
    openDrawer,
    closeDrawer,
  };
};
