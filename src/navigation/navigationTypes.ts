export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  MainTabs: undefined;
  Modal: { title: string };
};
