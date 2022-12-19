import { StyleSheet, Text, View } from "react-native";
import colors from "../../misc/Colors";
import React from "react";

function BigTitle({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 60,
    color: colors.dark_gray,
  },
});

export { BigTitle };
