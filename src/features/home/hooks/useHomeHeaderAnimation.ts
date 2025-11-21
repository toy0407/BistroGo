import React from "react";
import { Animated } from "react-native";

const COLLAPSE_DISTANCE = 140;

export const useHomeHeaderAnimation = (activeCategory: string | null) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const forcedCollapse = React.useRef(new Animated.Value(0)).current;
  const scrollValueRef = React.useRef(0);

  React.useEffect(() => {
    const id = scrollY.addListener(({ value }) => {
      scrollValueRef.current = value;
    });

    return () => {
      scrollY.removeListener(id);
    };
  }, [scrollY]);

  React.useEffect(() => {
    const currentScroll = Math.min(scrollValueRef.current, COLLAPSE_DISTANCE);
    const collapseTarget = activeCategory
      ? COLLAPSE_DISTANCE - currentScroll
      : 0;

    Animated.timing(forcedCollapse, {
      toValue: collapseTarget,
      duration: 220,
      useNativeDriver: false,
    }).start();
  }, [activeCategory, forcedCollapse]);

  const collapseDriver = React.useMemo(
    () => Animated.add(scrollY, forcedCollapse),
    [scrollY, forcedCollapse]
  );

  const searchTranslateY = collapseDriver.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -28],
    extrapolate: "clamp",
  });
  const greetingOpacity = collapseDriver.interpolate({
    inputRange: [0, 60],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const greetingHeight = collapseDriver.interpolate({
    inputRange: [0, 60],
    outputRange: [72, 0],
    extrapolate: "clamp",
  });
  const greetingTranslate = collapseDriver.interpolate({
    inputRange: [0, 60],
    outputRange: [0, -12],
    extrapolate: "clamp",
  });
  const cardLift = collapseDriver.interpolate({
    inputRange: [0, COLLAPSE_DISTANCE],
    outputRange: [0, -65],
    extrapolate: "clamp",
  });

  const scrollHandler = React.useMemo(
    () =>
      Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
        useNativeDriver: false,
      }),
    [scrollY]
  );

  return {
    scrollHandler,
    searchTranslateY,
    greetingOpacity,
    greetingHeight,
    greetingTranslate,
    cardLift,
  };
};
