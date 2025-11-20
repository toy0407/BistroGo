import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./navigationTypes";
import LoginScreen from "@/features/auth/screens/LoginScreen";
import RegisterScreen from "@/features/auth/screens/RegisterScreen";
import OnboardingScreen from "@/features/onboarding/screens/OnboardingScreen";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
