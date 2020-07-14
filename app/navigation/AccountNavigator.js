import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import MyAccountScreen from "../screens/MyAccountScreen";
import MyPlaceScreen from "../screens/MyPlaceScreen";
const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.MYACCOUNT} component={MyAccountScreen} />
    <Stack.Screen name={routes.MYPLACES} component={MyPlaceScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
