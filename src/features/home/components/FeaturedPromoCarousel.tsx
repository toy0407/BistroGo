import React from "react";
import {
  FlatList,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { FeaturedPromo } from "../types";
import { AppColors } from "../../../theme";

interface FeaturedPromoCarouselProps {
  promos: FeaturedPromo[];
}

const AUTO_SCROLL_INTERVAL = 5000;

export const FeaturedPromoCarousel: React.FC<FeaturedPromoCarouselProps> = ({
  promos,
}) => {
  const { width } = useWindowDimensions();
  const horizontalPadding = 24;
  const cardSpacing = 12;
  const cardWidth = width - horizontalPadding * 2;
  const listRef = React.useRef<FlatList<FeaturedPromo>>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleMomentumEnd = React.useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const interval = cardWidth + cardSpacing;
      const newIndex = Math.round(offsetX / interval);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    },
    [cardSpacing, cardWidth, currentIndex]
  );

  React.useEffect(() => {
    if (promos.length <= 1) {
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promos.length);
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(intervalId);
  }, [promos.length]);

  React.useEffect(() => {
    if (!promos.length || !listRef.current) {
      return;
    }

    const targetIndex = Math.min(currentIndex, promos.length - 1);
    const interval = cardWidth + cardSpacing;
    try {
      listRef.current.scrollToIndex({ index: targetIndex, animated: true });
    } catch {
      listRef.current.scrollToOffset({
        offset: targetIndex * interval,
        animated: true,
      });
    }
  }, [cardSpacing, cardWidth, currentIndex, promos.length]);

  const renderItem = ({
    item,
    index,
  }: {
    item: FeaturedPromo;
    index: number;
  }) => (
    <View
      style={[
        styles.slide,
        {
          width: cardWidth,
          marginRight: index === promos.length - 1 ? 0 : cardSpacing,
        },
      ]}
    >
      <ImageBackground
        source={{ uri: item.image }}
        style={[styles.card, { width: cardWidth }]}
        imageStyle={styles.cardImage}
      />
    </View>
  );

  return (
    <View>
      <FlatList
        ref={listRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        data={promos}
        keyExtractor={(promo) => promo.id}
        renderItem={renderItem}
        onMomentumScrollEnd={handleMomentumEnd}
        snapToInterval={cardWidth + cardSpacing}
        snapToAlignment="center"
        decelerationRate="fast"
        getItemLayout={(_, index) => ({
          length: cardWidth + cardSpacing,
          offset: (cardWidth + cardSpacing) * index,
          index,
        })}
        extraData={[cardWidth, cardSpacing]}
      />
      <View style={styles.indicatorRow}>
        {promos.map((promo, index) => (
          <View
            key={promo.id}
            style={[
              styles.indicatorDot,
              index === currentIndex && styles.indicatorDotActive,
              index !== promos.length - 1 && styles.indicatorSpacing,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    alignItems: "center",
  },
  card: {
    height: 170,
    borderRadius: 32,
    overflow: "hidden",
  },
  cardImage: {
    borderRadius: 32,
  },
  indicatorRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  indicatorDot: {
    width: 18,
    height: 6,
    borderRadius: 999,
    backgroundColor: "rgba(243,233,181,0.5)",
  },
  indicatorSpacing: {
    marginRight: 8,
  },
  indicatorDotActive: {
    backgroundColor: AppColors.background,
  },
});
