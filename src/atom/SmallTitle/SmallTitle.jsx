import { StyleSheet, Text, View } from "react-native";
import colors from "../../misc/Colors";
import React from "react";

function SmallTitle({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: colors.dark_gray,
  },
});

export { SmallTitle };
