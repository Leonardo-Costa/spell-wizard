import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Onboarding</Text>
      <Button
        title={"Login"}
        onPress={() => {
          navigation.navigate("Login");
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
  },
});

export { Onboarding };
