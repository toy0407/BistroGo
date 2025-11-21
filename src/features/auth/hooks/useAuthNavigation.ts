import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../navigation/navigationTypes";

type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export const useAuthNavigation = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const navigateToRegister = useCallback(() => {
    navigation.navigate("Register");
  }, [navigation]);

  const navigateToLogin = useCallback(() => {
    navigation.navigate("Login");
  }, [navigation]);

  const navigateToForgotPassword = useCallback(() => {
    navigation.navigate("ForgotPassword");
  }, [navigation]);

  return {
    goBack,
    navigateToRegister,
    navigateToLogin,
    navigateToForgotPassword,
  };
};
