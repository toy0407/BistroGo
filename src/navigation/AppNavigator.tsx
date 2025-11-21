import { useEffect } from "react";
import AuthStack from "./AuthStack";
import RootStack from "./RootStack";
import { useAuthStore } from "@/store";

export default function AppNavigator() {
  const { user, loading, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (loading) {
    // TODO: Return loading screen/splash screen
    return null;
  }

  if (user) {
    return <RootStack />;
  }
  return <AuthStack />;
}
