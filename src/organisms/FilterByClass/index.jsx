import { StyleSheet, Text, View } from "react-native";
import { ClassButton } from "../../atom";
import React from "react";
import colors from "../../misc/Colors";

function FilterByClass() {
  const classNames = {
    0: "bard",
    1: "cleric",
    2: "druid",
    3: "paladin",
    4: "ranger",
    5: "sorcerer",
    6: "warlock",
    7: "wizard",
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
        Filter By Class
      </Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {Object.keys(classNames).map((item) => {
          return <ClassButton key={item} id={item} text={classNames[item]} />;
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

export { FilterByClass };
