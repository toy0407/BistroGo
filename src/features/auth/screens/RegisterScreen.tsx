import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppColors } from "../../../theme";
import { Button } from "@/components";
import { TextInput, PasswordInput } from "../components";
import { useSignUpForm, useAuthNavigation } from "../hooks";
import { useAuthStore } from "@/store";

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

  const { goBack, navigateToLogin } = useAuthNavigation();
  const signup = useAuthStore((state) => state.signup);

  const handleSignUp = useCallback(async () => {
    if (validateForm()) {
      try {
        await signup(name, email, phNumber, password, birthDate);
        console.log("Sign up successful");
      } catch (error) {
        console.error("Sign up failed:", error);
        // TODO: Show error message to user
      }
    }
  }, [validateForm, name, email, phNumber, password, birthDate, signup]);

  const handleSocialLogin = useCallback((provider: string) => {
    // TODO: Implement social login
    console.log("Login with:", provider);
  }, []);

  return (
    <View style={styles.safeArea}>
      <SafeAreaView style={styles.topSafeArea} />
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
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoid}
        >
          <View style={styles.card}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollContent}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
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

              {/* Terms and Privacy Policy */}
              <View style={styles.termsContainer}>
                <Text style={styles.termsText}>
                  By continuing, you agree to{" "}
                </Text>
                <TouchableOpacity onPress={() => console.log("Terms of Use")}>
                  <Text style={styles.termsLink}>Terms of Use</Text>
                </TouchableOpacity>
                <Text style={styles.termsText}> and </Text>
                <TouchableOpacity onPress={() => console.log("Privacy Policy")}>
                  <Text style={styles.termsLink}>Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={styles.termsText}>.</Text>
              </View>

              {/* Sign Up Button */}
              <Button
                title="Sign Up"
                variant="primary"
                onPress={handleSignUp}
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
                <TouchableOpacity onPress={navigateToLogin}>
                  <Text style={styles.loginLink}>Log In</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </View>
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
  container: {
    flex: 1,
  },
  keyboardAvoid: {
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
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
  signupButton: {
    width: "75%",
    alignSelf: "center",
    marginBottom: 16,
    backgroundColor: AppColors.background,
  },
  termsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  termsText: {
    color: "#666",
    fontSize: 12,
    fontWeight: "300",
  },
  termsLink: {
    color: AppColors.background,
    fontSize: 12,
    fontWeight: "400",
    textDecorationLine: "none",
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
