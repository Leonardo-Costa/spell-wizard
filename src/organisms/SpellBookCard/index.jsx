import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../../misc/Colors";
import { IconButton } from "../../atom";
import { SpellBookCardContent } from "../../screens/SpellBookCardContent";

const icons = {
  teste: require("../../../assets/casa.png"),
  close: require("../../../assets/Close_Circle.png"),
};

function SpellBookCard() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setModalVisible(true);
      }}
    >
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <SpellBookCardContent />
      </Modal>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: colors.white,
            padding: 20,
            borderRadius: 100,
          }}
        >
          <Image
            source={icons.teste}
            resizeMethod={"auto"}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.title}>Ambrosia</Text>
          <Text style={styles.subtitle}>Druid Spellbook</Text>
          <Text style={styles.spellsSaved}>10 spells saved</Text>
        </View>
        <IconButton
          style={{ position: "absolute", right: 0, top: 0 }}
          img={icons.close}
          width={24}
          height={24}
        />
      </View>
    </TouchableOpacity>
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
    fontSize: 32,
    fontWeight: "bold",
    color: colors.dark_gray,
  },
  subtitle: {
    color: colors.dark_gray,
    fontSize: 16,
    fontWeight: "700",
  },
  spellsSaved: {
    color: colors.dark_gray,
    fontSize: 14,
    fontWeight: "600",
  },
});

export { SpellBookCard };
