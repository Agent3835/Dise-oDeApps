/** @format */

import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";

const Tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

function MyStack() {
  return (
    <stack.Navigator>
      <stack.Screen
        name='HomeScreen'
        component={HomeScreen}
      />
      <stack.Screen
        name='StackScreen'
        component={StackScreen}
      />
    </stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='home'
        component={MyStack}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
      />
      <Tab.Screen
        name='Setting'
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
