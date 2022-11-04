import { StyleSheet, View, FlatList } from "react-native";
import { BigTitle, IconButton, SearchBar } from "../../atom";
import { SpellCard } from "../../organisms";
import React from "react";
import spells from "../../data/spells.json";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FilterStack = createNativeStackNavigator();

function FilterTabStack() {
  return (
    <FilterTabStack.Navigator>
      <FilterTabStack.Screen name="Home" component={Home} />
    </FilterTabStack.Navigator>
  );
}

const icons = {
  group: require("../../../assets/group.png"),
  search: require("../../../assets/search.png"),
};

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20
          }}
        >
          <BigTitle text="Spells" />
          <IconButton img={icons.group}/>
        </View>
        <SearchBar icon={icons.search}/>
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
    paddingHorizontal: 15,
    paddingTop: 60,
  },
  spellList: {
    marginHorizontal: 15,
    flex: 4,
  },
});

export { Home };
