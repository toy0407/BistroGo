import { User } from "@/models/user.model";

const login = async (email: string, password: string): Promise<User> => {
  setTimeout(() => {
    console.log(`User logged in with email: ${email}`);
  }, 1000);
  return {
    id: "1",
    name: "Flutrr User",
    email,
    phoneNumber: "+911234567890",
    birthDate: "01/01/1990",
  };
};

const signup = async (
  name: string,
  email: string,
  phoneNumber: string,
  password: string,
  birthDate: string
) => {
  setTimeout(() => {
    console.log(
      `User signed up with name: ${name}, email: ${email}, phone: ${phoneNumber}, birthDate: ${birthDate}`
    );
  }, 1000);
};

const forgotPassword = async (email: string) => {
  setTimeout(() => {
    console.log(`Password reset link sent to email: ${email}`);
  }, 1000);
};

const getCurrentUser = async (): Promise<User | null> => {
  // Simulate fetching current user
  setTimeout(() => {
    console.log("Fetching current user");
  }, 1000);
  return null;
  return {
    id: "1",
    name: "Flutrr User",
    email: "flutrruser@example.com",
    phoneNumber: "+911234567890",
    birthDate: "01/01/1990",
  };
};

export const AuthService = {
  login,
  signup,
  forgotPassword,
  getCurrentUser,
};
