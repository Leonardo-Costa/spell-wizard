import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../misc/Colors";
import { IconButton } from "../../atom";

const icons = {
  arrow: require("../../../assets/arrow.png"),
  settings: require("../../../assets/settings.png"),
};

function Header([setModalVisible]) {
  return (
    <View style={styles.container}>
      <IconButton img={icons.arrow} onPress={() => setModalVisible(false)} />
      <Text style={styles.title}>Ambrosia</Text>
      <IconButton img={icons.settings} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    color: colors.dark_gray,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export { Header };
