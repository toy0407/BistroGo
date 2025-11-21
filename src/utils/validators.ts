export interface ValidationResult {
  isValid: boolean;
  error: string;
}

const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return { isValid: false, error: "Email is required" };
  }

  if (!emailRegex.test(email)) {
    return { isValid: false, error: "Please enter a valid email" };
  }

  return { isValid: true, error: "" };
};

const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, error: "Password is required" };
  }

  if (password.length < 6) {
    return { isValid: false, error: "Password must be at least 6 characters" };
  }

  return { isValid: true, error: "" };
};

const validateName = (name: string): ValidationResult => {
  if (!name) {
    return { isValid: false, error: "Name is required" };
  }

  if (name.length < 3) {
    return { isValid: false, error: "Name must be at least 3 characters" };
  }

  return { isValid: true, error: "" };
};

const validatePhoneNumber = (phoneNumber: string): ValidationResult => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format

  if (!phoneNumber) {
    return { isValid: false, error: "Phone number is required" };
  }

  if (!phoneRegex.test(phoneNumber)) {
    return { isValid: false, error: "Please enter a valid phone number" };
  }

  return { isValid: true, error: "" };
};

const validateBirthDate = (birthDate: string): ValidationResult => {
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/; // DD/MM/YYYY format

  if (!birthDate) {
    return { isValid: false, error: "Date of birth is required" };
  }

  if (!dateRegex.test(birthDate)) {
    return {
      isValid: false,
      error: "Please enter a valid date of birth (DD/MM/YYYY)",
    };
  }

  return { isValid: true, error: "" };
};

export const Validator = {
  validateEmail,
  validatePassword,
  validateName,
  validatePhoneNumber,
  validateBirthDate,
};
