import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigationTypes";
import HomeScreen from "@/features/home/screens/HomeScreen";

const Root = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Root.Navigator>
      <Root.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Root.Navigator>
  );
}
