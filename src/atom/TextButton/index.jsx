import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "../../misc/Colors";

function TextButton({ text, style }) {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => {
        setPressed(!pressed);
      }}
      style={[
        {
          backgroundColor: pressed ? colors.white : colors.dark_gray,
          borderRadius: 50,
        },
        style,
      ]}
    >
      <Text
        style={{
          color: pressed ? colors.dark_gray : colors.white,
          fontWeight: "500",
          paddingVertical: 10,
          paddingHorizontal: 15,
          fontSize: 18,
          textTransform: "capitalize",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

export { TextButton };
