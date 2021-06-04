import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WeatherApp } from "../screens/WeatherApp";
import { SearchApp } from "../screens/SearchApp";
import { colors } from "../styles/colors";

const homeStack = createStackNavigator();

export const HomeStack = () => (
  <homeStack.Navigator initialRouteName="Search">
    <homeStack.Screen name="Weather" component={WeatherApp} />
    <homeStack.Screen name="Search" component={SearchApp} />
  </homeStack.Navigator>
);
