import { Validator } from "@/utils";
import { useCallback, useState } from "react";

export const useSignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phNumberError, setPhNumberError] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = useCallback(
    (text: string) => {
      setName(text);
      if (nameError) {
        const result = Validator.validateName(text);
        setNameError(result.error);
      }
    },
    [nameError]
  );

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
  const handlePhNumberChange = useCallback(
    (text: string) => {
      setPhNumber(text);
      if (phNumberError) {
        const result = Validator.validatePhoneNumber(text);
        setPhNumberError(result.error);
      }
    },
    [phNumberError]
  );

  const handleBirthDateChange = useCallback(
    (text: string) => {
      setBirthDate(text);
      if (birthDateError) {
        const result = Validator.validateBirthDate(text);
        setBirthDateError(result.error);
      }
    },
    [birthDateError]
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

  const handleNameBlur = useCallback(() => {
    const result = Validator.validateName(name);
    setNameError(result.error);
  }, [name]);

  const handleEmailBlur = useCallback(() => {
    const result = Validator.validateEmail(email);
    setEmailError(result.error);
  }, [email]);

  const handlePhNumberBlur = useCallback(() => {
    const result = Validator.validatePhoneNumber(phNumber);
    setPhNumberError(result.error);
  }, [phNumber]);

  const handleBirthDateBlur = useCallback(() => {
    const result = Validator.validateBirthDate(birthDate);
    setBirthDateError(result.error);
  }, [birthDate]);
  const validateForm = useCallback(() => {
    const nameResult = Validator.validateName(name);
    const emailResult = Validator.validateEmail(email);
    const phNumberResult = Validator.validatePhoneNumber(phNumber);
    const birthDateResult = Validator.validateBirthDate(birthDate);
    const passwordResult = Validator.validatePassword(password);

    setNameError(nameResult.error);
    setEmailError(emailResult.error);
    setPhNumberError(phNumberResult.error);
    setBirthDateError(birthDateResult.error);
    setPasswordError(passwordResult.error);

    return (
      nameResult.isValid &&
      emailResult.isValid &&
      phNumberResult.isValid &&
      birthDateResult.isValid &&
      passwordResult.isValid
    );
  }, [name, email, phNumber, birthDate, password]);

  const resetForm = useCallback(() => {
    setName("");
    setEmail("");
    setPhNumber("");
    setBirthDate("");
    setPassword("");
    setNameError("");
    setEmailError("");
    setPhNumberError("");
    setBirthDateError("");
    setPasswordError("");
  }, []);

  return {
    name,
    email,
    phNumber,
    birthDate,
    password,
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
    resetForm,
  };
};
