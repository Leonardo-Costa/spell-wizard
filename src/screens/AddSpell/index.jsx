import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import colors from "../../misc/Colors";
import { SmallTitle } from "../../atom";
import { CreateSpellModal } from "../CreateSpellModal";

const icons = {
  logo: require("../../../assets/logo.png"),
};

function AddSpell() {
  const [modalVisible, setModalVisible] = useState(false);
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
          setModalVisible(true);
        }}
        style={styles.button}
      >
        <SmallTitle textStyle={{ textAlign: "center" }}>
          Create Spell
        </SmallTitle>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CreateSpellModal />
      </Modal>
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
