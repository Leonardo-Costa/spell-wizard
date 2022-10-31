import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../misc/Colors";

function Separator() {
  return (
    <View
      style={{
        width: "100%",
        height: 1.5,
        backgroundColor: colors.dark_gray,
        marginVertical: 20,
      }}
    />
  );
}

const styles = StyleSheet.create({});

export { Separator };
