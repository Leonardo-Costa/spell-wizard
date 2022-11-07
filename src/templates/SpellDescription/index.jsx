import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { IconButton, MediumTitle, Separator, SmallTitle } from "../../atom";
import { TitleSubtitle } from "../../molecules";
import { SpellStats } from "../../organisms/SpellStats";
import { RatingCard } from "../../organisms/RatingCard";
import colors from "../../misc/Colors";
import React from "react";
import rating1 from "../../data/comentarios.json";
import rating2 from "../../data/comentarios2.json";

const icons = {
  close: require("../../../assets/Close_Circle.png"),
};

function SpellDescription({ spell, setModalVisible }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          marginBottom: 20,
        }}
      >
        <MediumTitle style={{ marginLeft: 20 }}>{spell.name}</MediumTitle>
        <View style={{ marginRight: 15 }}>
          <IconButton
            img={icons.close}
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </View>

      <ScrollView style={{ flex: 1, width: "100%" }}>
        <SpellStats spell={spell} />
        <TitleSubtitle title={"Description"} subTitle={spell.desc} />
        {spell.higher_level ? (
          <TitleSubtitle
            title={"Higher levels"}
            subTitle={spell.higher_level.map((item) => {
              return item + "\n";
            })}
          />
        ) : null}
        <SmallTitle style={{ marginHorizontal: 20 }}>Ratings</SmallTitle>
        <RatingCard name={spell.name} rating={rating1} />
        <RatingCard name={spell.name} rating={rating2} />
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
