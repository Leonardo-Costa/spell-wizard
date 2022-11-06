import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MediumTitle } from "../../atom";
import colors from "../../misc/Colors";

function NoSpells({ style }) {
  return (
    <View style={style}>
      <MediumTitle color={colors.light_gray}>No spells found ;(</MediumTitle>
    </View>
  );
}

const styles = StyleSheet.create({});

export { NoSpells };
