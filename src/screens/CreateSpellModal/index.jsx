import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import colors from "../../misc/Colors";

const placeholders = [
  "level",
  "castingTime",
  "range",
  "concentration",
  "duration",
  "components",
  "ritual",
  "description",
];

function CreateSpellModal() {
  const [inputValues, setInputValues] = useState({});

  const createAlert = () => {
    Alert.alert("Ops!", "Preencha todos os campos.", [
      { text: "Ok!", onPress: () => console.log("OK Pressed") },
    ]);
  };

  handleSaveSpell = () => {};

  return (
    <View style={styles.container}>
      <View style={{ width: "80%" }}>
        {placeholders.map((placeholder, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={colors.medium_gray}
            onChangeText={(text) => {
              setInputValues((prevInputValues) => {
                return {
                  ...prevInputValues,
                  [placeholder]: text,
                };
              });
            }}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          const properties = Object.keys(inputValues);
          const numProperties = properties.length;
          for (let i = 0; i < numProperties; i++) {
            if (inputValues[properties[i]] === "") {
              createAlert();
              return;
            }
          }
          if (numProperties !== placeholders.length) {
            createAlert();
          }
        }}
      >
        <Text
          style={{ color: colors.dark_gray, fontWeight: "bold", fontSize: 16 }}
        >
          Submit
        </Text>
      </TouchableOpacity>
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
    color: colors.dark_gray,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 50,
    padding: 10,
    width: "100%",
    marginBottom: 10,
  },
  submit: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "40%",
    paddingVertical: 10,
  },
});

export { CreateSpellModal };
