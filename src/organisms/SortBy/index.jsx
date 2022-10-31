import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Icon } from "../../atom";
import colors from "../../misc/Colors";

const icons = {
  teste: require("../../../assets/Check_Big.png"),
};

function SortBy() {
  const [ascending, setAscending] = useState(true);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setAscending(true);
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Sort by level </Text>
            <Text
              style={[
                styles.title,
                { color: ascending ? colors.white : colors.dark_gray },
              ]}
            >
              ascending
            </Text>
          </View>
        </TouchableOpacity>
        {ascending ? (
          <Icon image={icons.teste} size={24} color={colors.dark_gray} />
        ) : null}
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setAscending(false);
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Sort by level </Text>
            <Text
              style={[
                styles.title,
                { color: !ascending ? colors.white : colors.dark_gray },
              ]}
            >
              descending
            </Text>
          </View>
        </TouchableOpacity>
        {!ascending ? (
          <Icon image={icons.teste} size={24} color={colors.dark_gray} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: colors.dark_gray,
    fontWeight: "500",
    paddingVertical: 10,
  },
});

export { SortBy };
