import { StyleSheet, Text, View } from "react-native";
import { ClassButton } from "../../atom";
import React from "react";
import colors from "../../misc/Colors";

function FilterByName({ name, titles }) {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: colors.dark_gray,
          marginBottom: 30,
          marginLeft: 10,
        }}
      >
        Filter By {name}
      </Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {titles.map((text) => (
          <ClassButton key={text} style={styles.button} text={text} />
        ))}
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

export { FilterByName };
