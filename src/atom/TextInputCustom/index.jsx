import { StyleSheet, TextInput } from "react-native";
import React from "react";
import colors from "../../misc/Colors";

function TextInputCustom({ data, setData, placeholder, secureTextEntry }) {
  return (
    <TextInput
      style={{
        backgroundColor: colors.light_gray,
        width: "80%",
        height: 50,
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        marginBottom: 20,
      }}
      value={data}
      placeholder={placeholder}
      onChangeText={(data) => {
        setEmail(setData);
      }}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({});

export { TextInputCustom };
