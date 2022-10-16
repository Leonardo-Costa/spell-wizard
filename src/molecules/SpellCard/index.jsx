import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "../../atom";
import colors from "../../misc/Colors";
import React from "react";

const icons = {
  favorito: require("../../../assets/favorito.png"),
  opcao: require("../../../assets/Opcao.png"),
};

function SpellCard({title, level, school, desc}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleAndOptions}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: "row" }}>
          <IconButton width={30} height={30} color={colors.dark_gray} img={icons.favorito} />
          <IconButton width={30} height={30} color={colors.dark_gray} img={icons.opcao} />
        </View>
      </View>
      <Text style={styles.subtitle}>{level}st Level {school}</Text>
      <View style={styles.divisor}/>
      <Text style={styles.desc}>
        {desc}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 20,
  },
  titleAndOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: colors.dark_gray
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.dark_gray
  },
  desc: {
    color: colors.dark_gray,
    paddingTop: 5
  },
  options: {
    flexDirection: "row",
  },
  divisor: {
    height: 1.5,
    width: '100%',
    backgroundColor: colors.dark_gray
  }
});

export { SpellCard };
