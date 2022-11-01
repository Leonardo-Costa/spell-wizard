import { StyleSheet, View, FlatList } from "react-native";
import { BigTitle, IconButton, SearchBar } from "../../atom";
import { SpellCard } from "../../organisms";
import React, { useState, useContext, useEffect } from "react";
import spells from "../../data/spells.json";
import { Modal } from "react-native";
import { Filter } from "../Filter";
import { FilterContext } from "../../contexts/filters";

const icons = {
  group: require("../../../assets/group.png"),
  search: require("../../../assets/search.png"),
};

const renderItem = ({ item }) => {
  return <SpellCard key={item.index} spell={item} />;
};

function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const { ascending, level, classes, schools, stars } =
    useContext(FilterContext);
  const [spellData, setSpellData] = useState(spells);
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
          <BigTitle text="Spells" />
          <IconButton
            onPress={() => {
              setModalVisible(true);
            }}
            img={icons.group}
          />
        </View>
        <SearchBar icon={icons.search} />
      </View>
      <View style={styles.spellList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={spellData}
          renderItem={renderItem}
          keyExtractor={(item) => item.index}
        />
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Filter setModalVisible={setModalVisible} />
      </Modal>
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
    flex: 3,
  },
});

export { Home };
