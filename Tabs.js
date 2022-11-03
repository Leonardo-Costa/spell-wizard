import { Home, LikedSpells, AddSpell, SpellBooks } from "./src/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import colors from "./src/misc/Colors";
import { Icon } from "./src/atom";

const Tab = createBottomTabNavigator();

const icons = {
  casa: require("./assets/casa.png"),
  casaBold: require("./assets/casa-bold.png"),
  book: require("./assets/book-alt.png"),
  bookBold: require("./assets/book-bold.png"),
  add: require("./assets/add.png"),
  addBold: require("./assets/add-bold.png"),
  coracao: require("./assets/coracao.png"),
  coracaoBold: require("./assets/coracao-bold.png"),
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          height: 60,
        },

        tabBarIcon: ({ focused }) => {
          const tabBarActiveTintColor = colors.white;
          const tabBarInactiveTintColor = colors.dark_gray;
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? icons.casaBold : icons.casa;
          } else if (route.name === "SpellBooks") {
            iconName = focused ? icons.bookBold : icons.book;
          } else if (route.name === "LikedSpells") {
            iconName = focused ? icons.coracaoBold : icons.coracao;
          } else if (route.name === "AddSpell") {
            iconName = focused ? icons.addBold : icons.add;
          }
          return (
            <Icon
              image={iconName}
              size={20}
              color={focused ? tabBarActiveTintColor : tabBarInactiveTintColor}
            />
          );
        },
        tabBarActiveTintColor: "#fa6894",
        tabBarInactiveTintColor: "#71768c",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SpellBooks" component={SpellBooks} />
      <Tab.Screen name="LikedSpells" component={LikedSpells} />
      <Tab.Screen name="AddSpell" component={AddSpell} />
    </Tab.Navigator>
  );
}

export default Tabs;
