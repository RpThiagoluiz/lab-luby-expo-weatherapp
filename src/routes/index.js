import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from "./drawer.routes";
import { HomeStack } from "./stack.routes";
import { TabsRoutes } from "./bottomTabs.routes";

export const Routes = () => (
  <NavigationContainer>
    <HomeStack />
  </NavigationContainer>
);
