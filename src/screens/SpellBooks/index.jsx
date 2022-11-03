import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../misc/Colors";

function SpellBooks() {
  return (
    <View style={styles.container}>
      <Text>SpellBooks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { SpellBooks };
