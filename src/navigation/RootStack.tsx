import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./navigationTypes";
import HomeScreen from "@/features/home/screens/HomeScreen";
// import MainTabs from "./MainTabs";
// import ModalScreen from "../features/common/screens/ModalScreen";

const Root = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Root.Navigator>
      {/* <Root.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      /> */}
      {/* <Root.Screen
        name="Modal"
        component={ModalScreen}
        options={{ presentation: "modal" }}
      /> */}
      <Root.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Root.Navigator>
  );
}
