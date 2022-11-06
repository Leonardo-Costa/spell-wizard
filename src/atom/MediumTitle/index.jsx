import { StyleSheet, Text, View } from "react-native";
import colors from "../../misc/Colors";
import React from "react";

function MediumTitle({ children, style, color }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, { color: color }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: colors.dark_gray,
  },
});

export { MediumTitle };
