import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WeatherApp } from "../screens/WeatherApp";
import { SearchApp } from "../screens/SearchApp";
import { colors } from "../styles/colors";

const tabsRoutes = createBottomTabNavigator();

export const TabsRoutes = () => (
  <tabsRoutes.Navigator>
    <TabsRoutes.Screen name="Weather" component={WeatherApp} />
    <TabsRoutes.Screen name="Search" component={SearchApp} />
  </tabsRoutes.Navigator>
);
