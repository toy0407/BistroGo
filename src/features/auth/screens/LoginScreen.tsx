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
import { TextInput, PasswordInput } from "../components";
import { useLoginForm, useAuthNavigation } from "../hooks";
import { useAuthStore } from "@/store";

const LoginScreen: React.FC = () => {
  const {
    email,
    password,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    handleEmailBlur,
    validateForm,
  } = useLoginForm();

  const { goBack, navigateToRegister, navigateToForgotPassword } =
    useAuthNavigation();
  const login = useAuthStore((state) => state.login);

  const handleLogin = useCallback(async () => {
    if (validateForm()) {
      try {
        await login(email, password);
        console.log("Login successful");
      } catch (error) {
        console.error("Login failed:", error);
        // TODO: Show error message to user
      }
    }
  }, [validateForm, email, password, login]);

  const handleSocialLogin = useCallback((provider: string) => {
    // TODO: Implement social login
    console.log("Login with:", provider);
  }, []);

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
            <Text style={styles.headerTitle}>Log In</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Content Card */}
          <View style={styles.card}>
            <Text style={styles.welcomeText}>Welcome</Text>

            {/* Email Input */}
            <TextInput
              label="Email or Mobile Number"
              value={email}
              onChangeText={handleEmailChange}
              onBlur={handleEmailBlur}
              placeholder="example@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              error={emailError}
            />

            {/* Password Input */}
            <PasswordInput
              label="Password"
              value={password}
              onChangeText={handlePasswordChange}
              placeholder="Enter your password"
              error={passwordError}
            />

            {/* Forgot Password */}
            <TouchableOpacity
              onPress={navigateToForgotPassword}
              style={styles.forgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Forget Password</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <Button
              title="Log In"
              variant="primary"
              onPress={handleLogin}
              style={styles.loginButton}
            />

            {/* Social Login */}
            <Text style={styles.orText}>or sign up with</Text>
            <View style={styles.socialButtons}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin("google")}
              >
                <Image
                  source={require("../../../assets/icons/google-logo.png")}
                  style={styles.socialIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin("facebook")}
              >
                <Image
                  source={require("../../../assets/icons/facebook-logo.png")}
                  style={styles.socialIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialLogin("fingerprint")}
              >
                {/* <Text style={styles.socialIcon}>👆</Text> */}
                <Image
                  source={require("../../../assets/icons/fingerprint-icon.png")}
                  style={styles.socialIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            {/* Sign Up Link */}
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have an account? </Text>
              <TouchableOpacity onPress={navigateToRegister}>
                <Text style={styles.signUpLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
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
    paddingTop: 32,
    paddingBottom: 32,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "600",
    color: AppColors.textDark,
    marginBottom: 69,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: AppColors.background,
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 32,
  },
  loginButton: {
    width: "75%",
    alignSelf: "center",
    marginBottom: 24,
    backgroundColor: AppColors.background,
  },
  orText: {
    textAlign: "center",
    color: AppColors.textDark,
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 16,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 24,
  },
  socialButton: {
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    width: 34,
    height: 34,
    color: AppColors.background,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    color: AppColors.textDark,
    fontSize: 14,
    fontWeight: "300",
  },
  signUpLink: {
    color: AppColors.background,
    fontSize: 14,
    fontWeight: "300",
  },
});

export default LoginScreen;
