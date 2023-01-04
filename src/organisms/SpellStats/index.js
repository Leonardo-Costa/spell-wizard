import { StyleSheet, Text, View } from "react-native";
import { TitleSubtitle } from "../../molecules";
import React from "react";

function SpellStats({ spell }) {
  return (
    <View style={styles.stats}>
      <TitleSubtitle title="Level" subTitle={spell.level} />
      <TitleSubtitle title="Casting Time" subTitle={spell.casting_time} />
      <TitleSubtitle title="Range" subTitle={spell.range} />
      <TitleSubtitle
        title="Concentration"
        subTitle={spell.concentration ? "Yes" : "No"}
      />
      <TitleSubtitle title="Duration" subTitle={spell.duration} />
      <TitleSubtitle
        title="Components"
        subTitle={spell.components.map((item) => {
          return item + " ";
        })}
      />
      <TitleSubtitle title="Ritual" subTitle={spell.ritual ? "Yes" : "No"} />
    </View>
  );
}

const styles = StyleSheet.create({
  stats: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export { SpellStats };
