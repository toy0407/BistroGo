import { Validator } from "@/utils";
import { useState, useCallback } from "react";

export const useForgotPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handlePasswordChange = useCallback(
    (text: string) => {
      setPassword(text);
      if (passwordError) {
        const result = Validator.validatePassword(text);
        setPasswordError(result.error);
      }
    },
    [passwordError]
  );

  const handleConfirmPasswordChange = useCallback(
    (text: string) => {
      setConfirmPassword(text);
      if (confirmPasswordError) {
        const result =
          text === password
            ? { isValid: true, error: "" }
            : { isValid: false, error: "Passwords do not match" };
        setConfirmPasswordError(result.error);
      }
    },
    [confirmPasswordError, password]
  );

  const validateForm = useCallback(() => {
    const passwordResult = Validator.validatePassword(password);
    const confirmPasswordResult =
      confirmPassword === password
        ? { isValid: true, error: "" }
        : { isValid: false, error: "Passwords do not match" };
    setPasswordError(passwordResult.error);
    setConfirmPasswordError(confirmPasswordResult.error);

    return passwordResult.isValid && confirmPasswordResult.isValid;
  }, [password, confirmPassword]);

  const resetForm = useCallback(() => {
    setPassword("");
    setConfirmPassword("");
    setPasswordError("");
    setConfirmPasswordError("");
  }, []);

  return {
    password,
    confirmPassword,
    passwordError,
    confirmPasswordError,
    handlePasswordChange,
    handleConfirmPasswordChange,
    validateForm,
    resetForm,
  };
};
