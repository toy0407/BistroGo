import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useAuthStore } from "@/store";
import { AppColors } from "../../../theme";

const drawerActions = [
  {
    id: "orders",
    text: "My Orders",
    icon: require("@assets/icons/orders.png"),
  },
  {
    id: "profile",
    text: "My Profile",
    icon: require("@assets/icons/profile.png"),
  },
  {
    id: "address",
    text: "Delivery Address",
    icon: require("@assets/icons/address.png"),
  },
  {
    id: "payments",
    text: "Payment Methods",
    icon: require("@assets/icons/payments.png"),
  },
  {
    id: "support",
    text: "Contact Us",
    icon: require("@assets/icons/contact.png"),
  },
  {
    id: "help",
    text: "Help & FAQs",
    icon: require("@assets/icons/help.png"),
  },
  {
    id: "settings",
    text: "Settings",
    icon: require("@assets/icons/settings.png"),
  },
];

export const ProfileDrawer: React.FC = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [isLoggingOut, setIsLoggingOut] = React.useState(false);

  const displayName = user?.name;
  const displayEmail = user?.email;

  const handleLogout = React.useCallback(() => {
    if (isLoggingOut) {
      return;
    }
    setIsLoggingOut(true);
    try {
      logout();
    } finally {
      setIsLoggingOut(false);
    }
  }, [isLoggingOut, logout]);

  return (
    <View style={styles.drawerContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.drawerContent}
      >
        <View style={styles.profileRow}>
          <Image
            source={require("@assets/images/avatar.png")}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.profileName}>{displayName}</Text>
            <Text style={styles.profileEmail}>{displayEmail}</Text>
          </View>
        </View>
        <View style={styles.actionList}>
          {drawerActions.map((action, index) => (
            <View key={action.id} style={styles.actionRow}>
              <TouchableOpacity>
                <View style={styles.option}>
                  <View style={styles.iconWrapper}>
                    <Image
                      source={action.icon}
                      style={styles.actionIcon}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.actionText}>{action.text}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.divider} />
            </View>
          ))}
        </View>
        <View style={styles.logoutRow}>
          <TouchableOpacity
            onPress={handleLogout}
            disabled={isLoggingOut}
            activeOpacity={0.7}
          >
            <View style={styles.option}>
              <View style={styles.iconWrapper}>
                <Image
                  source={require("@assets/icons/logout.png")}
                  style={styles.logoutIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.actionText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: AppColors.background,
    borderTopLeftRadius: 48,
    borderBottomLeftRadius: 48,
    zIndex: 10,
  },
  drawerContent: {
    flexGrow: 1,
    paddingTop: 72,
    paddingHorizontal: 32,
    paddingBottom: 32,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 36,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "500",
    color: AppColors.white,
  },
  profileEmail: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "500",
    color: AppColors.textYellow,
  },
  actionList: {
    flexGrow: 0,
  },
  actionRow: {
    marginBottom: 28,
    height: 60,
  },
  option: {
    flexDirection: "row",
    gap: 32,
    alignItems: "center",
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: AppColors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  actionIcon: {
    width: 30,
    height: 30,
  },
  actionText: {
    fontSize: 24,
    fontWeight: "500",
    color: AppColors.textYellow,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#FFD8C7",
    marginTop: 24,
  },
  logoutRow: {
    marginTop: 16,
    marginLeft: 9,
  },
  logoutIcon: {
    width: 32,
    height: 32,
  },
});
