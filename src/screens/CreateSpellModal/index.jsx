import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import colors from "../../misc/Colors";

const placeholders = [
  "Level",
  "Casting time",
  "Range",
  "Concentration",
  "Duration",
  "Components",
  "Ritual",
  "Description",
];

function CreateSpellModal() {
  return (
    <View style={styles.container}>
      <View style={{ width: "80%" }}>
        {placeholders.map((item) => {
          return (
            <TextInput
              key={item}
              style={styles.input}
              placeholder={item}
              placeholderTextColor={colors.dark_gray}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    padding: 10,
    width: "100%",
    marginBottom: 10,
  },
});

export { CreateSpellModal };
