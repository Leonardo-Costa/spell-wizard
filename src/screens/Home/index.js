import { StyleSheet, View, FlatList, RefreshControl } from "react-native";
import { BigTitle, IconButton, SearchBar } from "../../atom";
import { NoSpells } from "../../molecules";
import { SpellCard } from "../../organisms";
import React, { useState, useContext, useEffect } from "react";
import spells from "../../data/spells.json";
import { Modal } from "react-native";
import { Filter } from "../Filter";
import { FilterContext } from "../../contexts/filters";
import colors from "../../misc/Colors";
import { db, getFirestore, collection, getDocs } from "../../../firebaseConfig";

const icons = {
  filter: require("../../../assets/filter.png"),
  search: require("../../../assets/search.png"),
};

function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [spellData, setSpellData] = useState(spells);
  const [text, setText] = useState("");
  const [isSpell, setIsSpell] = useState(true);
  const [apply, setApply] = useState(false);
  const [spellDataBase, setspellDataBase] = useState([]);


  const spellServer = async() => {
    const querySnapshot = await getDocs(collection(db, "spellAdd"));
    querySnapshot.forEach((doc) => {
    console.log( doc.id );
    console.log(doc.data());
    setspellDataBase ({
      ...doc.data(),
      id: doc.id,
    })
    });
  }


  useEffect ( () => {
    spellServer();
  }, []);


  const renderItem = ({ item }) => {
    return <SpellCard key={item.index} spell={item} />;
  };

  const {
    ascending,
    level,
    classes,
    schools,
    stars,
    classesNames,
    schoolNames,
  } = useContext(FilterContext);

  const filterSpells = () => {
    let filteredData = spells;
    //order filteredData by decreasing aphabetical order
    if (!ascending) {
      filteredData = filteredData.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
    }
    //order filteredData by increasing alphabetical order
    else {
      filteredData = filteredData.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }

    //Algoritmo de filtragem de niveis
    let levelSpells = [];
    for (let i = 0; i < level.length; i++) {
      if (level[i]) {
        levelSpells.push(i);
      }
    }
    filteredData = filteredData.filter((item) => {
      return levelSpells.includes(item.level);
    });

    //Algoritmo de filtragem de classes
    let classesSpells = [];
    for (let i = 0; i < classes.length; i++) {
      if (classes[i]) {
        classesSpells.push(classesNames[i]);
      }
    }
    let aux1 = [];
    for (let i = 0; i < filteredData.length; i++) {
      let flag = false;
      for (let j = 0; j < filteredData[i].classes.length; j++) {
        if (classesSpells.includes(filteredData[i].classes[j].index)) {
          flag = true;
          break;
        }
      }
      if (flag) {
        aux1.push(filteredData[i]);
      }
    }
    filteredData = aux1;
    //Algoritmo de filtragem por escola
    let schoolSpells = [];
    for (let i = 0; i < schools.length; i++) {
      if (schools[i]) {
        schoolSpells.push(schoolNames[i]);
      }
    }

    filteredData = filteredData.filter((item) => {
      return schoolSpells.includes(item.school.index);
    });

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
  }, [text, apply]);

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
          <IconButton
            onPress={() => {
              setModalVisible(true);
            }}
            color={colors.dark_gray}
            img={icons.filter}
          />
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
          <NoSpells style={{ marginTop: 150 }} />
        )}
      </View>
      
      {/*<BigTitle>Spells Personalizadas</BigTitle> */}

      {/*<FlatList
      Arrumar 
      data={spellDataBase}

        /> */}

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        transparent
      >
        <Filter setModalVisible={setModalVisible} setApply={setApply} />
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

export { Home };
