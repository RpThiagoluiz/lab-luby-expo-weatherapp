import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { WeatherApp } from "../screens/WeatherApp";
import { SearchApp } from "../screens/SearchApp";
import { colors } from "../styles/colors";

const drawerRoutes = createDrawerNavigator();

export const DrawerRoutes = () => (
  <drawerRoutes.Navigator initialRouteName="Weather">
    <drawerRoutes.Screen name="Weather" component={WeatherApp} />
    <drawerRoutes.Screen name="Search" component={SearchApp} />
  </drawerRoutes.Navigator>
);
