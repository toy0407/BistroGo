import { create } from "zustand";
import { User } from "@/models/user.model";
import { AuthService } from "@/services/auth.service";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    name: string,
    email: string,
    phoneNumber: string,
    password: string,
    birthDate: string
  ) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (email: string, password: string) => {
    try {
      set({ loading: true, error: null });
      const user = await AuthService.login(email, password);
      set({ user, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Login failed",
        loading: false,
      });
      throw error;
    }
  },

  signup: async (
    name: string,
    email: string,
    phoneNumber: string,
    password: string,
    birthDate: string
  ) => {
    try {
      set({ loading: true, error: null });
      await AuthService.signup(name, email, phoneNumber, password, birthDate);
      // Fetch the user after successful signup
      const user = await AuthService.getCurrentUser();
      set({ user, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Signup failed",
        loading: false,
      });
      throw error;
    }
  },

  logout: () => {
    set({ user: null, error: null });
  },

  checkAuth: async () => {
    try {
      set({ loading: true, error: null });
      const user = await AuthService.getCurrentUser();
      set({ user, loading: false });
    } catch (error) {
      set({ user: null, loading: false, error: null });
    }
  },

  clearError: () => {
    set({ error: null });
  },
}));
