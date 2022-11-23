import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { BigTitle, IconButton, SearchBar } from "../../atom";
import { NoSpells } from "../../molecules";
import { SpellCard } from "../../organisms";
import React, { useState, useContext, useEffect } from "react";
import spells from "../../data/spells.json";
import { Modal } from "react-native";
import { Filter } from "../Filter";
import { FilterContext } from "../../contexts/filters";
import colors from "../../misc/Colors";

const icons = {
  filter: require("../../../assets/filter.png"),
  search: require("../../../assets/search.png"),
};

function LikedSpells() {
  const [modalVisible, setModalVisible] = useState(false);
  const [spellData, setSpellData] = useState(spells);
  const [text, setText] = useState("");
  const [isSpell, setIsSpell] = useState(true);
  const [apply, setApply] = useState(false);

  const renderItem = ({ item }) => {
    return <SpellCard key={item.index} spell={item} />;
  };
  const { likedSpells, setLikedSpells } = useContext(FilterContext);
  const filterSpells = () => {
    let filteredData = likedSpells;
    //filtar filteredData com base no nome
    filteredData = filteredData.filter((item) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    setSpellData(filteredData);
    if (filteredData.length == 0) {
      setIsSpell(false);
    } else {
      setIsSpell(true);
    }
    if (apply) {
      setApply(false);
    }
  };

  useEffect(() => {
    filterSpells();
  }, [text, apply, likedSpells]);

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
          <BigTitle>Spells</BigTitle>
        </View>
        <SearchBar icon={icons.search} text={text} setText={setText} />
      </View>
      <View style={styles.spellList}>
        {isSpell ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            removeClippedSubviews
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
        ) : (
          <TouchableOpacity
            style={{ flex: 1, width: "100%" }}
            onPress={() => filterSpells()}
          >
            <NoSpells style={{ marginTop: 150 }} />
          </TouchableOpacity>
        )}
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
    paddingTop: 60,
  },
  topPart: {
    flex: 2,
    paddingHorizontal: 15,
  },
  spellList: {
    marginHorizontal: 15,
    flex: 6,
    alignItems: "center",
  },
});

export { LikedSpells };
