import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../misc/Colors";
import { SmallTitle } from "../../atom";

const icons = {
  logo: require("../../../assets/logo.png"),
};

function AddSpell() {
  return (
    <View style={styles.container}>
      <Image source={icons.logo} />
      <View style={{ width: "60%", marginTop: 30 }}>
        <SmallTitle textStyle={{ textAlign: "center" }}>
          Crie seus próprios Spells e os organize nos seus Spellbooks
        </SmallTitle>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("create spell");
        }}
        style={styles.button}
      >
        <SmallTitle textStyle={{ textAlign: "center" }}>
          Create Spell
        </SmallTitle>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 50,
    marginTop: 70,
    justifyContent: "center",
    width: "80%",
    elevation: 15,
  },
});

export { AddSpell };
