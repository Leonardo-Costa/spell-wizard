import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ModalSpellBook } from "../ModalSpellBook";
import { ModalNotes } from "../ModalNotes";
import colors from "../../misc/Colors";
import { IconButton } from "../../atom";

const icons = {
  arrow: require("../../../assets/arrow.png"),
  settings: require("../../../assets/settings.png"),
};

const Tab = createMaterialTopTabNavigator();

function SpellBookCardContent({ setModalVisible }) {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
      }}
    >
      <View style={styles.header}>
        <IconButton img={icons.arrow} onPress={() => setModalVisible(false)} />
        <Text style={styles.title}>Ambrosia</Text>
        <IconButton img={icons.settings} />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.dark_gray,
          tabBarInactiveTintColor: colors.dark_gray,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: {
            backgroundColor: colors.white,
          },
        }}
      >
        <Tab.Screen name="Spells" component={ModalSpellBook} />
        <Tab.Screen name="Notes" component={ModalNotes} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    color: colors.dark_gray,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export { SpellBookCardContent };
