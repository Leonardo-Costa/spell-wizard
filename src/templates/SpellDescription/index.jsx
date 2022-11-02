import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { MediumTitle, Separator } from "../../atom";
import { TitleSubtitle } from "../../molecules";
import { SpellStats } from "../../organisms/SpellStats";
import colors from "../../misc/Colors";
import React from "react";

function SpellDescription({ spell }) {
  return (
    <SafeAreaView style={styles.container}>
      <MediumTitle style={{ marginLeft: 20, marginBottom: 20 }}>
        {spell.name}
      </MediumTitle>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <SpellStats spell={spell} />
        <TitleSubtitle title={"Description"} subTitle={spell.desc} />
        <TitleSubtitle
          title={"Higher levels"}
          subTitle={spell.higher_level.map((item) => {
            return item + "\n";
          })}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    marginTop: 50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "flex-start",
    paddingTop: 20,
  },
  desc: {
    color: colors.dark_gray,
    fontSize: 16,
    marginHorizontal: 20,
    lineHeight: 24,
  },
});

export { SpellDescription };
