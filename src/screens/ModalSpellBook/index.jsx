import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SpellCard } from "../../organisms/SpellCard";
import spells from "../../data/spells.json";
import colors from "../../misc/Colors";

function ModalSpellBook() {
  return (
    <View style={{ paddingTop: 20, backgroundColor: colors.white, flex: 1 }}>
      <SpellCard spell={spells[0]} />
      <SpellCard spell={spells[1]} />
      <SpellCard spell={spells[2]} />
    </View>
  );
}

const styles = StyleSheet.create({});

export { ModalSpellBook };
