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

export const Validator = {
  validateEmail,
  validatePassword,
};
