import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "../Icon";
import React from "react";

function Button({
  image,
  size,
  color,
  style,
  borderRadius,
  onPress,
  backgroundColor,
  alignSelf,
  btnWidth,
  btnHeight,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        {
          width: btnWidth,
          height: btnHeight,
          borderRadius: borderRadius ? borderRadius : 0,
          backgroundColor: styles.backgroundColor
            ? styles.backgroundColor
            : backgroundColor,
          alignItems: alignSelf ? alignSelf : "center",
        },
      ]}
      onPress={onPress}
    >
      <Icon size={size || 10} image={image} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export { Button };
