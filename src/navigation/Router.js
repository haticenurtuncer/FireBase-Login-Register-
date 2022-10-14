import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name="Home" component={Home}  options={{headerShown: false, gestureEnabled: false}} />
        <Stack.Screen name="Register" component={Register}  options={{headerShown: false, gestureEnabled: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
