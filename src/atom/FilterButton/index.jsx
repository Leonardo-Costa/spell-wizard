import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import colors from "../../misc/Colors";
import { FilterContext } from "../../contexts/filters";

function FilterButton({ size, title, style, id }) {
  const { level, setLevel } = useContext(FilterContext);
  const [selected, setSelected] = useState(true);

  useEffect(() => {
    setSelected(level[id]);
  }, [level]);

  const handleOnPress = () => {
    let list = level;
    list[id] = !list[id];
    setLevel(list);
    setSelected(!selected);
  };

  return (
    <View style={{ alignItems: "center", ...style }}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => {
          handleOnPress();
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
            {
              backgroundColor: selected ? colors.white : colors.dark_gray,
              width: size,
              height: size,
            },
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
    borderRadius: 40,
  },
});

export { FilterButton };
