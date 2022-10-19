import { StyleSheet, View, FlatList } from "react-native";
import { BigTitle, IconButton } from "../../atom";
import { SpellCard } from "../../molecules";
import React from "react";
import spells from "../../data/spells.json";

function Home() {
  const icons = {
    group: require("../../../assets/group.png"),
  };

  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <BigTitle text="Spells" />
        <IconButton img={icons.group} />
      </View>
      <View style={styles.spellList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={spells}
          renderItem={({ item }) => <SpellCard spell={item} />}
          keyExtractor={(item) => item.index}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  topPart: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  spellList: {
    marginHorizontal: 15,
    flex: 3,
  },
});

export { Home };
