import { StyleSheet, Image, View } from "react-native";
import React from "react";

function Icon({ size, image, color, style }) {
  return (
    <View style={{ width: size, height: size }}>
      <Image
        style={[{ width: size, flex: 1 }, style]}
        source={image}
        tintColor={color ? color : null}
        resizeMethod={"scale"}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export { Icon };
