import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { AppColors } from "../theme";

interface ButtonProps {
  title: string;
  variant: "primary" | "secondary" | "tertiary";
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  onPress,
  style,
  disabled = false,
}) => {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isTertiary = variant === "tertiary";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary
          ? styles.primaryButton
          : isSecondary
          ? styles.secondaryButton
          : styles.tertiaryButton,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.text,
          isPrimary
            ? styles.primaryText
            : isSecondary
            ? styles.secondaryText
            : styles.tertiaryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 56,
  },
  primaryButton: {
    backgroundColor: AppColors.background,
  },
  secondaryButton: {
    backgroundColor: AppColors.accentYellow,
  },
  tertiaryButton: {
    backgroundColor: AppColors.accentYellowLight,
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },
  primaryText: {
    color: AppColors.white,
  },
  secondaryText: {
    color: AppColors.background,
  },
  tertiaryText: {
    color: AppColors.background,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
