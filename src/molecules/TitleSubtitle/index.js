import { StyleSheet, Text, View } from "react-native";
import colors from "../../misc/Colors";
import React from "react";

function TitleSubtitle({ title, subTitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  title: {
    color: colors.dark_gray,
    fontSize: 26,
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.dark_gray,
    fontWeight: "400",
    fontSize: 18,
  },
});

export { TitleSubtitle };
