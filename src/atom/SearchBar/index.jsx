import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { IconButton } from "../../atom/IconButton";
import colors from "../../misc/Colors";

function SearchBar({ icon, text, setText }) {
  return (
    <View style={styles.container}>
      <IconButton img={icon} color={colors.dark_gray} width={24} height={24} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={colors.dark_gray}
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
      />
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
