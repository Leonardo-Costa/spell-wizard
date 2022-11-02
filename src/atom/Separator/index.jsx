import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../misc/Colors";

function Separator({ style }) {
  return (
    <View
      style={[
        {
          width: "100%",
          height: 1.5,
          backgroundColor: colors.dark_gray,
          marginVertical: 20,
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({});

export { Separator };
