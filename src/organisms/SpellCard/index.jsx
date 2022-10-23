import { StyleSheet, View, Modal } from "react-native";
import colors from "../../misc/Colors";
import { SpellCardContent } from "../../molecules";
import React, { useState } from "react";

const icons = {
  favorito: require("../../../assets/favorito.png"),
  opcao: require("../../../assets/Opcao.png"),
};

function SpellCard({ spell }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <SpellCardContent
        spell={spell}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export { SpellCard };