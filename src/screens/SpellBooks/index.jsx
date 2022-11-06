import { StyleSheet, Text, View } from "react-native";
import { BigTitle, SearchBar } from "../../atom";
import React from "react";
import colors from "../../misc/Colors";

const icons = {
  search: require("../../../assets/search.png"),
};

function SpellBooks() {
  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <BigTitle>SpellBooks</BigTitle>
        </View>
        <SearchBar icon={icons.search} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  topPart: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 60,
    width: "100%",
  },
});

export { SpellBooks };
