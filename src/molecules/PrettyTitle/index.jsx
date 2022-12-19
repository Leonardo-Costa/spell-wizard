import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../misc/Colors";

function PrettyTitle({ children }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
      }}
    >
      <View style={{ height: 2, backgroundColor: colors.dark_gray, flex: 1 }} />
      <Text
        style={{
          fontSize: 20,
          paddingHorizontal: 10,
          fontWeight: "bold",
        }}
      >
        {children}
      </Text>
      <View style={{ height: 2, backgroundColor: colors.dark_gray, flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({});

export { PrettyTitle };
