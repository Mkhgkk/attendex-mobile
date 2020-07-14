import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainButton from "./MainButton";
import routes from "./routes";
import MainScreen from "../screens/MainScreen";
import HistoryScreen from "../screens/HistoryScreen";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ showLabel: false }}
      initialRouteName={routes.MAIN}
    >
      <Tab.Screen
        name={routes.HISTORY}
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.MAIN}
        component={MainScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <MainButton onPress={() => navigation.navigate(routes.MAIN)} />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ME}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
