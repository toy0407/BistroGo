import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColors } from "../../../theme";

export interface BottomNavItem {
  id: string;
  label: string;
  icon: any;
}

interface BottomNavBarProps {
  items: BottomNavItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  items,
  activeId,
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <TouchableOpacity
            key={item.id}
            style={[styles.navItem, isActive && styles.navItemActive]}
            onPress={() => onSelect(item.id)}
            accessibilityLabel={item.label}
            accessibilityState={{ selected: isActive }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={[
                styles.icon,
                isActive ? styles.iconActive : styles.iconInactive,
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 72,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: AppColors.background,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: "center",
    shadowColor: AppColors.black,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  navItem: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  navItemActive: {
    backgroundColor: "rgba(255,255,255,0.18)",
  },
  icon: {
    height: 24,
    width: 24,
  },
  iconInactive: {
    tintColor: "rgba(255,255,255,0.45)",
  },
  iconActive: {
    tintColor: AppColors.white,
  },
});
