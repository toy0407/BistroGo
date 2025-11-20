import { Validator } from "@/utils";
import { useState, useCallback } from "react";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = useCallback(
    (text: string) => {
      setEmail(text);
      if (emailError) {
        const result = Validator.validateEmail(text);
        setEmailError(result.error);
      }
    },
    [emailError]
  );

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

  const handleEmailBlur = useCallback(() => {
    const result = Validator.validateEmail(email);
    setEmailError(result.error);
  }, [email]);

  const validateForm = useCallback(() => {
    const emailResult = Validator.validateEmail(email);
    const passwordResult = Validator.validatePassword(password);

    setEmailError(emailResult.error);
    setPasswordError(passwordResult.error);

    return emailResult.isValid && passwordResult.isValid;
  }, [email, password]);

  const resetForm = useCallback(() => {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  }, []);

  return {
    email,
    password,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    handleEmailBlur,
    validateForm,
    resetForm,
  };
};
