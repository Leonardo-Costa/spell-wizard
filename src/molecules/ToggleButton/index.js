import { SwitchButton, SmallTitle } from '../../atom';
import { StyleSheet, Text, View } from "react-native";
import colors from "../../misc/Colors";
import React from "react";

function GenericButtonOnOff({text}) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <SwitchButton></SwitchButton>
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 1,
    display: "flex",
    alignItems: "center"
  },
  title: {
    flex: 1,
    fontSize: 12,
    color: colors.dark_gray,
    fontWeight: "bold",
    alignItems: "center",
  },
});

export { GenericButtonOnOff }