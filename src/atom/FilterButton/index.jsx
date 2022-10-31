import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "../../misc/Colors";

function FilterButton({ size, title, style }) {
  const [color, setColor] = useState(true);
  return (
    <View style={{ alignItems: "center", ...style }}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => {
          setColor(!color);
        }}
        style={{
          width: size,
          height: size,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={[
            { backgroundColor: color ? colors.dark_gray : colors.white },
            styles.button,
          ]}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: colors.dark_gray,
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});

export { FilterButton };
