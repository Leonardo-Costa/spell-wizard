import { StyleSheet, Text, View } from "react-native";
import { FilterButton } from "../../atom";
import React, { useState, useContext } from "react";
import colors from "../../misc/Colors";
import { FilterContext } from "../../contexts/filters";

const levelNames = {
  0: "0",
  1: "1st",
  2: "2nd",
  3: "3rd",
  4: "4th",
  5: "5th",
  6: "6th",
  7: "7th",
  8: "8th",
  9: "9th",
};

function FilterByLevel({ style }) {
  const buttonSize = 30;
  const { level, setLevel } = useContext(FilterContext);

  const handlePress = (l) => {
    let list = level;
    list[l] = !list[l];
    setLevel(list);
  };

  return (
    <View style={[styles.container, style]}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: colors.dark_gray,
          marginBottom: 30,
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
        {Object.keys(levelNames).map((l) => (
          <FilterButton
            key={l}
            size={buttonSize}
            title={levelNames[l]}
            id={l}
          />
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      ></View>
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
