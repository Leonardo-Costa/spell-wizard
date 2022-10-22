import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import React from "react";

function IconButton({ img, width, height,
   padding, color}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          padding: padding ? padding: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress= {() => {
          navigation.navigate('FilterTab')
        }}
      >
        <Image
          source={img}
          tintColor={color}
          style={{ width: width ? width : 24, height: height ? height : 24 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export { IconButton };
