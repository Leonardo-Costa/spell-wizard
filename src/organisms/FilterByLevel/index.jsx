import { StyleSheet, Text, View } from "react-native";
import { FilterButton } from "../../atom";
import React, { useState } from "react";
import colors from "../../misc/Colors";

function FilterByLevel({ style }) {
  const buttonSize = 50;
  return (
    <View style={[styles.container, style]}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: colors.dark_gray,
          marginBottom: 30,
          marginLeft: 10,
        }}
      >
        Filter by Level
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <FilterButton size={buttonSize} title="Cantrip" />
        <FilterButton size={buttonSize} title="1st" />
        <FilterButton size={buttonSize} title="2nd" />
        <FilterButton size={buttonSize} title="3rd" />
        <FilterButton size={buttonSize} title="4th" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <FilterButton size={buttonSize} title="5th" />
        <FilterButton size={buttonSize} title="6th" />
        <FilterButton size={buttonSize} title="7th" />
        <FilterButton size={buttonSize} title="8th" />
        <FilterButton size={buttonSize} title="9th" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export { FilterByLevel };
