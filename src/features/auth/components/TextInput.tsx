import React, { useState, useCallback } from "react";
import {
  View,
  TextInput as RNTextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { AppColors } from "../../../theme";

interface TextInputProps extends Omit<RNTextInputProps, "style"> {
  label: string;
  error?: string;
  style?: ViewStyle;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  style,
  ...textInputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
          error && styles.inputContainerError,
        ]}
      >
        <RNTextInput
          style={styles.input}
          placeholderTextColor="#999"
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...textInputProps}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
  },
  inputContainer: {
    backgroundColor: AppColors.accentYellowLight,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "transparent",
    paddingHorizontal: 16,
    height: 56,
    justifyContent: "center",
  },
  inputContainerFocused: {
    borderColor: AppColors.background,
    backgroundColor: AppColors.accentYellowLight,
  },
  inputContainerError: {
    borderColor: "#E53935",
    backgroundColor: "#FFEBEE",
  },
  input: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 0,
  },
  errorText: {
    color: "#E53935",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});

export default TextInput;
