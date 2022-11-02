import { StyleSheet, View, FlatList, RefreshControl } from "react-native";
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
  const [spellData, setSpellData] = useState(spells);
  const { ascending, level, classes, schools, stars, classesNames } =
    useContext(FilterContext);

  const filterSpells = () => {
    //Algoritmo de filtragem de niveis
    let levelSpells = [];
    for (let i = 0; i < level.length; i++) {
      if (level[i]) {
        levelSpells.push(i);
      }
    }
    let filteredData = spells.filter((item) => {
      return levelSpells.includes(item.level);
    });

    //Algoritmo de filtragem de classes
    let classesSpells = [];
    for (let i = 0; i < classes.length; i++) {
      if (classes[i]) {
        classesSpells.push(classesNames[i]);
      }
    }
    let aux = [];
    for (let i = 0; i < filteredData.length; i++) {
      let flag = false;
      for (let j = 0; j < filteredData[i].classes.length; j++) {
        if (classesSpells.includes(filteredData[i].classes[j].index)) {
          flag = true;
          break;
        }
      }
      if (flag) {
        aux.push(filteredData[i]);
      }
    }
    setSpellData(aux);
  };

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
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => {
                filterSpells();
              }}
            />
          }
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
    flex: 4,
  },
});

export { Home };
