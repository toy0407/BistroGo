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
import { useSignUpForm, useAuthNavigation } from "../hooks";

const RegisterScreen: React.FC = () => {
  const {
    name,
    email,
    phNumber,
    password,
    birthDate,
    nameError,
    phNumberError,
    emailError,
    passwordError,
    birthDateError,
    handleNameChange,
    handleEmailChange,
    handlePhNumberChange,
    handlePasswordChange,
    handleBirthDateChange,
    handleNameBlur,
    handleEmailBlur,
    handlePhNumberBlur,
    handleBirthDateBlur,
    validateForm,
  } = useSignUpForm();

  const { goBack, navigateToRegister, navigateToForgotPassword } =
    useAuthNavigation();

  const handleLogin = useCallback(() => {
    if (validateForm()) {
      // TODO: Implement login logic
      console.log("Login with:", email, password);
    }
  }, [validateForm, email, password]);

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
            <Text style={styles.headerTitle}>New Account</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Content Card */}
          <View style={styles.card}>
            <TextInput
              label="Name"
              value={name}
              onChangeText={handleNameChange}
              onBlur={handleNameBlur}
              placeholder="example@example.com"
              keyboardType="name-phone-pad"
              autoCapitalize="none"
              error={nameError}
            />

            {/* Password Input */}
            <PasswordInput
              label="Password"
              value={password}
              onChangeText={handlePasswordChange}
              placeholder="Enter your password"
              error={passwordError}
            />

            {/* Email Input */}
            <TextInput
              label="Email"
              value={email}
              onChangeText={handleEmailChange}
              onBlur={handleEmailBlur}
              placeholder="example@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              error={emailError}
            />

            {/* Phone Number Input */}
            <TextInput
              label="Mobile Number"
              value={phNumber}
              onChangeText={handlePhNumberChange}
              onBlur={handlePhNumberBlur}
              placeholder="+123 456 789"
              keyboardType="phone-pad"
              autoCapitalize="none"
              error={phNumberError}
            />

            {/* Date of Birth Input */}
            <TextInput
              label="Date of birth"
              value={birthDate}
              onChangeText={handleBirthDateChange}
              onBlur={handleBirthDateBlur}
              placeholder="DD/MM/YYYY"
              keyboardType="number-pad"
              autoCapitalize="none"
              error={birthDateError}
            />

            {/* Sign Up Button */}
            <Button
              title="Sign Up"
              variant="primary"
              onPress={handleLogin}
              style={styles.signupButton}
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
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={navigateToRegister}>
                <Text style={styles.loginLink}>Log In</Text>
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
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 32,
  },
  signupButton: {
    width: "75%",
    alignSelf: "center",
    marginBottom: 24,
    backgroundColor: AppColors.background,
  },
  orText: {
    textAlign: "center",
    color: "#666",
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
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#666",
    fontSize: 14,
    fontWeight: "300",
  },
  loginLink: {
    color: AppColors.background,
    fontSize: 14,
    fontWeight: "300",
  },
});

export default RegisterScreen;
