import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ModalSpellBook } from "../ModalSpellBook";
import { ModalSpellsSlots } from "../ModalSpellsSlots";
import { ModalNotes } from "../ModalNotes";
import colors from "../../misc/Colors";
import { Header } from "../../molecules";

const Tab = createMaterialTopTabNavigator();

function SpellBookCardContent() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: colors.primary,
      }}
    >
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.dark_gray,
          tabBarInactiveTintColor: colors.dark_gray,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: {
            backgroundColor: colors.primary,
          },
        }}
      >
        <Tab.Screen name="Spells" component={ModalSpellBook} />
        <Tab.Screen name="Spell slots" component={ModalSpellsSlots} />
        <Tab.Screen name="Notes" component={ModalNotes} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});

export { SpellBookCardContent };
