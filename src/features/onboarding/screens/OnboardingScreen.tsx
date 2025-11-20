import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppColors } from "../../../theme";
import { Button } from "@/components";
import { AuthStackParamList } from "../../../navigation/navigationTypes";

type OnboardingScreenNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  React.useEffect(() => {
    console.log("[OnboardingScreen] mounted");
    return () => console.log("[OnboardingScreen] unmounted");
  }, []);

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          source={require("../../../assets/icons/onboarding_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>
        <Text style={styles.titleAccent}>YUM</Text>
        <Text style={styles.titleWhite}>QUICK</Text>
      </Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </Text>
      <View style={styles.buttons}>
        <Button
          title="Log In"
          variant="secondary"
          style={styles.buttonSpacing}
          onPress={handleLogin}
        />
        <Button title="Sign Up" variant="tertiary" onPress={handleSignUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    paddingHorizontal: 93,
    paddingBottom: 120,
    justifyContent: "flex-end",
  },
  logoWrapper: {
    position: "absolute",
    alignSelf: "center",
    top: "35%",
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 220,
    tintColor: AppColors.accentYellow,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 30,
  },
  titleAccent: {
    color: AppColors.accentYellow,
  },
  titleWhite: {
    color: AppColors.white,
  },
  subtitle: {
    textAlign: "center",
    color: AppColors.white,
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 43,
  },
  buttons: {
    width: "100%",
  },
  buttonSpacing: {
    marginBottom: 4,
  },
});

export default OnboardingScreen;
