import { StyleSheet, Text, View } from "react-native";
import { BigTitle, SearchBar, IconButton } from "../../atom";
import React from "react";
import colors from "../../misc/Colors";
import { SpellBookCard } from "../../organisms";
import { db, getFirestore, collection, addDoc } from "../../../firebaseConfig";

const icons = {
  search: require("../../../assets/search.png"),
  add: require("../../../assets/add.png"),
};

function SpellBooks() {

  const addSpellBookonDataBase = async() => {
    const textForm = Object.values(inputValues);
    //console.log(type(textForm[2]));
    try {
      const docRef = await addDoc(collection(db, "spellBookAdd"), {      
        //first: "Ada",
        //last: "Lovelace",
        //born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } 
  }


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

          <IconButton
            //onPress={addSpellBookonDataBase}
            color={colors.dark_gray}
            img={icons.add}
        />

        </View>
        <SearchBar icon={icons.search} />
        <SpellBookCard style={{ marginTop: 40 }} />
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
    paddingTop: 60,
  },
  topPart: {
    flex: 2,
    paddingHorizontal: 15,
    width: "100%",
  },
});

export { SpellBooks };
