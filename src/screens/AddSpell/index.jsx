import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../misc/Colors";

function AddSpell() {
  return (
    <View style={styles.container}>
      <Text>AddSpell</Text>
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

export { AddSpell };
