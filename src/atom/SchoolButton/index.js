import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../contexts/filters";
import colors from "../../misc/Colors";

function SchoolButton({ id, text }) {
  const [pressed, setPressed] = useState(false);
  const { schools, setSchools } = useContext(FilterContext);

  useEffect(() => {
    setPressed(schools[id]);
  }, [schools]);

  const handleOnPress = () => {
    setPressed(!pressed);
    let list = schools;
    list[id] = !list[id];
    setSchools(list);
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

export { SchoolButton };
