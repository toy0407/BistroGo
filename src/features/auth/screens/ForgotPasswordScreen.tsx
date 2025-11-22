import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors } from "../../../theme";
import { Button } from "@/components";
import { PasswordInput } from "../components";
import { useAuthNavigation } from "../hooks";
import { useAuthStore } from "@/store";
import { useForgotPasswordForm } from "../hooks/useForgotPasswordForm";

const ForgotPasswordScreen: React.FC = () => {
  const {
    password,
    confirmPassword,
    passwordError,
    confirmPasswordError,
    handlePasswordChange,
    handleConfirmPasswordChange,
    validateForm,
  } = useForgotPasswordForm();

  const { goBack } = useAuthNavigation();
  const forgotPassword = useAuthStore((state) => state.forgotPassword);

  const handleForgotPassword = useCallback(async () => {
    if (validateForm()) {
      try {
        await forgotPassword();
        console.log("Password reset successful");
        goBack();
      } catch (error) {
        console.error("Password reset failed:", error);
        // TODO: Show error message to user
      }
    }
  }, [validateForm, password, forgotPassword]);

  return (
    <View style={styles.safeArea}>
      <SafeAreaView style={styles.topSafeArea} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoid}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack} style={styles.backButton}>
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Set Password</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Content Card */}
          <View style={styles.card}>
            {/* Password Input */}
            <PasswordInput
              label="Password"
              value={password}
              onChangeText={handlePasswordChange}
              placeholder="Enter your password"
              error={passwordError}
            />

            {/* Confirm Password Input */}
            <PasswordInput
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              placeholder="Confirm your password"
              error={confirmPasswordError}
            />

            {/* Create New Password Button */}
            <Button
              title="Create New Password"
              variant="primary"
              onPress={handleForgotPassword}
              style={styles.createNewPasswordButton}
              fontSize={17}
            />
          </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 24,
    color: AppColors.background,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: AppColors.white,
  },
  placeholder: {
    width: 40,
  },
  card: {
    flex: 1,
    backgroundColor: AppColors.backgroundLight,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 32,
  },
  createNewPasswordButton: {
    width: "75%",
    alignSelf: "center",
    marginTop: 57,
    backgroundColor: AppColors.background,
  },
});

export default ForgotPasswordScreen;
