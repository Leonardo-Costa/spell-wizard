import { SplashScreen, OnboardingScreen, Login, SignUp } from "./src/screens";
import { StyleSheet } from "react-native";
import FilterProvider from "./src/contexts/filters";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import MenuDrawer from "react-native-side-drawer";
import { DrawerContent } from "./src/templates";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, FirebaseAuthTypes } from "firebase/auth";
import { auth } from "../spell-wizard/firebaseConfig";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {

  const [user , setUser] = useState(null);

  useEffect(() => {
      auth.onAuthStateChanged( _user => {
        setUser(_user);
      })
  }, [])

  return (
    <NavigationContainer>

        <FilterProvider>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            options={{ headerShown: false }}
          >
            <Stack.Screen
              navigation={navigation}
              name="SplashScreen"
              component={SplashScreen}
            />
            <Stack.Screen
              navigation={navigation}
              name="Onboarding"
              component={OnboardingScreen}
            />
            <Stack.Screen
              navigation={navigation}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              navigation={navigation}
              name="SignUp"
              component={SignUp}
            />
            <Stack.Screen
              navigation={navigation}
              name="Tabs"
              component={Tabs}
            />
          </Stack.Navigator>
        </FilterProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
