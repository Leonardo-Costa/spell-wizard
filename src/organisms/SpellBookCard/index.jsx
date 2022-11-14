import { StyleSheet, Text, View, Image, Modal } from "react-native";
import React, { useState } from "react";
import colors from "../../misc/Colors";
import { IconButton } from "../../atom";

const icons = {
  teste: require("../../../assets/casa.png"),
  close: require("../../../assets/Close_Circle.png"),
};

function SpellBookCard() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      ></Modal>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: colors.white,
            padding: 30,
            borderRadius: 100,
          }}
        >
          <Image
            source={icons.teste}
            resizeMethod={"auto"}
            style={{ width: 70, height: 70 }}
          />
        </View>
        <View style={{ marginLeft: 40 }}>
          <Text style={styles.title}>Ambrosia</Text>
          <Text style={styles.subtitle}>Druid Spellbook</Text>
          <Text style={styles.spellsSaved}>10 spells saved</Text>
        </View>
        <IconButton
          style={{ position: "absolute", right: 10, top: 0 }}
          img={icons.close}
          width={30}
          height={30}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.dark_gray,
  },
  subtitle: {
    color: colors.dark_gray,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  spellsSaved: {
    color: colors.dark_gray,
    fontSize: 14,
    fontWeight: "600",
  },
});

export { SpellBookCard };
