import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "../../atom";
import colors from "../../misc/Colors";
import React from "react";

const icons = {
  favorito: require("../../../assets/favorito.png"),
  opcao: require("../../../assets/Opcao.png"),
};

function SpellCard({ spell }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleAndOptions}>
        <Text numberOfLines={1} style={styles.title}>{spell.name}</Text>
        <View style={{ flexDirection: "row" }}>
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
        {spell.desc.map((item) => {return(item + '\n')})}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20
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

export { SpellCard };
