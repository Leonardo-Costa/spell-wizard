import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import colors from "../../misc/Colors";
import { db, getFirestore, collection, addDoc } from "../../../firebaseConfig";

const placeholders = [
  "level",
  "castingTime",
  "range",
  "concentration",
  "duration",
  "components",
  "ritual",
  "description",
];

function CreateSpellModal() {
  const [inputValues, setInputValues] = useState({});

  const createAlert = () => {
    Alert.alert("Ops!", "Preencha todos os campos.", [
      { text: "Ok!", onPress: () => console.log("OK Pressed") },
    ]);
  };

  handleSaveSpell = () => {};

  const addSpellonDataBase = async() => {
    const textForm = Object.values(inputValues);
    //console.log(type(textForm[2]));
    try {
      const docRef = await addDoc(collection(db, "spellAdd"), {
        level: textForm[0],
        castingTime: textForm[1],
        range: textForm[2],
        concentration: textForm[3],
        duration: textForm[4],
        components: textForm[5],
        ritual: textForm[6],
        description: textForm[7]
        
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
      <View style={{ width: "80%" }}>
        {placeholders.map((placeholder, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={colors.medium_gray}
            onChangeText={(text) => {
              setInputValues((prevInputValues) => {
                return {
                  ...prevInputValues,
                  [placeholder]: text,
                };
              });
            }}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.submit}
        onPress= {addSpellonDataBase}
        /*</View>{() => {
          const properties = Object.keys(inputValues);
          const numProperties = properties.length;
          for (let i = 0; i < numProperties; i++) {
            if (inputValues[properties[i]] === "") {
              createAlert();
              return;
            }
          }
          

          if (numProperties !== placeholders.length) {
            createAlert();
          }
        }} */
      >
        <Text
          style={{ color: colors.dark_gray, fontWeight: "bold", fontSize: 16 }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: colors.primary,
    color: colors.dark_gray,
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 50,
    padding: 10,
    width: "100%",
    marginBottom: 10,
  },
  submit: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "40%",
    paddingVertical: 10,
  },
});

export { CreateSpellModal };
