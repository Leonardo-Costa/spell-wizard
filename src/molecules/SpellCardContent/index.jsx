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
        {spell.level == 0
          ? spell.school.name + " " + "Cantrip"
          : spell.level == 1
          ? "1st Level" + " " + spell.school.name + " Spell"
          : spell.level == 2
          ? "2nd Level" + " " + spell.school.name + " Spell"
          : spell.level == 3
          ? "3rd Level" + " " + spell.school.name + " Spell"
          : spell.level == 4
          ? "4th Level" + " " + spell.school.name + " Spell"
          : spell.level == 5
          ? "5th Level" + " " + spell.school.name + " Spell"
          : spell.level == 6
          ? "6th Level" + " " + spell.school.name + " Spell"
          : spell.level == 7
          ? "7th Level" + " " + spell.school.name + " Spell"
          : spell.level == 8
          ? "8th Level" + " " + spell.school.name + " Spell"
          : spell.level == 9
          ? "9th Level" + " " + spell.school.name + " Spell"
          : ""}{" "}
      </Text>
      <View style={styles.divisor} />

      <Text numberOfLines={2} style={styles.desc}>
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
    fontSize: 32,
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
