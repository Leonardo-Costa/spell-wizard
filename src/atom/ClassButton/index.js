import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../contexts/filters";
import colors from "../../misc/Colors";

function ClassButton({ id, text }) {
  const [pressed, setPressed] = useState(false);
  const { classes, setClasses } = useContext(FilterContext);

  useEffect(() => {
    setPressed(classes[id]);
  }, [classes]);

  const handleOnPress = () => {
    setPressed(!pressed);
    let list = classes;
    list[id] = !list[id];
    setClasses(list);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => {
        handleOnPress();
      }}
      style={[
        {
          backgroundColor: pressed ? colors.white : colors.dark_gray,
          borderRadius: 50,
          marginBottom: 10,
        },
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

export { ClassButton };
