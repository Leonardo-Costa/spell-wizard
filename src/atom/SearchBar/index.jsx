//a search bar with an icon on the left and a text input on the right using react native

import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { IconButton } from "../../atom";
import colors from "../../misc/Colors";

const icons = {
    search: require("../../../assets/search.png"),
};

function SearchBar() {
    
  return (
    <View style={styles.container}>
      <IconButton
        img={icons.search}
        color={colors.dark_gray}
        width={24}
        height={24}
      />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light_gray,
    borderRadius: 8,
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  input: {
    width: "90%",
    color: colors.dark_gray,
  },
});

export { SearchBar };
