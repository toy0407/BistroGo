import { User } from "@/models/user.model";
import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_STORAGE_KEY = "@bistrogo_user";

const login = async (email: string, password: string): Promise<User | null> => {
  // Simulate login delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`User logged in with email: ${email}`);

  const user: User = {
    id: Date.now().toString(),
    name: "Flutrr User",
    email,
    phoneNumber: "+911234567890",
    birthDate: "01/01/1990",
  };

  // Store user in local storage
  await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));

  return user;
};

const signup = async (
  name: string,
  email: string,
  phoneNumber: string,
  password: string,
  birthDate: string
): Promise<User | null> => {
  // Simulate signup delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(
    `User signed up with name: ${name}, email: ${email}, phone: ${phoneNumber}, birthDate: ${birthDate}`
  );

  const user: User = {
    id: Date.now().toString(),
    name,
    email,
    phoneNumber,
    birthDate,
  };

  // Store user in local storage
  await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));

  return user;
};

const forgotPassword = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Password has been reset`);
};

const getCurrentUser = async (): Promise<User | null> => {
  try {
    console.log("Fetching current user from storage");
    const userJson = await AsyncStorage.getItem(USER_STORAGE_KEY);

    if (userJson) {
      return JSON.parse(userJson) as User;
    }

    return null;
  } catch (error) {
    console.error("Error fetching user from storage:", error);
    return null;
  }
};

const logout = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(USER_STORAGE_KEY);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export const AuthService = {
  login,
  signup,
  forgotPassword,
  getCurrentUser,
  logout,
};
