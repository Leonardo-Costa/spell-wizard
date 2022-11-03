import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import { IconButton } from "../../atom";
import colors from "../../misc/Colors";
import React from "react";

const icons = {
  favorito: require("../../../assets/favorito.png"),
  opcao: require("../../../assets/Opcao.png"),
};

function SpellCardContent({ spell, modalVisible, setModalVisible }) {
  return (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(!modalVisible);
      }}
      style={styles.container}
      activeOpacity={0.8}
    >
      <View style={styles.titleAndOptions}>
        <Text numberOfLines={1} style={styles.title}>
          {spell.name}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            width={30}
            height={30}
            color={colors.dark_gray}
            img={icons.favorito}
          />
          <IconButton
            width={30}
            height={30}
            color={colors.dark_gray}
            img={icons.opcao}
          />
        </View>
      </View>
      <Text style={styles.subtitle}>
        {spell.level}st Level {spell.school.name}
      </Text>
      <View style={styles.divisor} />

      <Text numberOfLines={3} style={styles.desc}>
        {spell.desc.map((item) => {
          return item + "\n";
        })}
      </Text>
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
  titleAndOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: colors.dark_gray,
    flex: 3,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.dark_gray,
  },
  desc: {
    color: colors.dark_gray,
    paddingTop: 5,
  },
  options: {
    flexDirection: "row",
  },
  divisor: {
    height: 1.5,
    width: "100%",
    backgroundColor: colors.dark_gray,
  },
});

export { SpellCardContent };
