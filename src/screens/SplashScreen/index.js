import { Button, StyleSheet, Text, View } from "react-native";
import { Icon } from "../../atom";
import React from "react";
import colors from "../../misc/Colors";
import { StackActions } from "@react-navigation/native";

const icons = {
  logo: require("../../../assets/logo.png"),
};

function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon image={icons.logo} size={160} color={colors.dark_gray} />
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Text style={[styles.title]}>Spell</Text>
        <Text style={[styles.title, { fontWeight: "900" }]}>Wizard</Text>
      </View>

      <Button
        title={"Onboarding"}
        onPress={() => {
          navigation.dispatch(StackActions.replace("Onboarding"));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 60,
    color: colors.dark_gray,
    fontWeight: "600",
  },
});

export { SplashScreen };
