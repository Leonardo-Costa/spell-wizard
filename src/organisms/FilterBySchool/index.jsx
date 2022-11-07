import { StyleSheet, Text, View } from "react-native";
import { SchoolButton } from "../../atom";
import React from "react";
import colors from "../../misc/Colors";

function FilterBySchool() {
  const schoolsNames = {
    0: "Conjuration",
    1: "Necromancy",
    2: "Evocation",
    3: "Abjuration",
    4: "Divination",
    5: "Enchantment",
    6: "Illusion",
    7: "Transmutation",
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: colors.dark_gray,
          marginBottom: 30,
        }}
      >
        Filter By School
      </Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {Object.keys(schoolsNames).map((item) => {
          return (
            <SchoolButton key={item} id={item} text={schoolsNames[item]} />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    marginBottom: 10,
  },
});

export { FilterBySchool };
