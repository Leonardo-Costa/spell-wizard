import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
      <Button
        title={"Onboarding"}
        onPress={() => {
          navigation.navigate("Onboarding", { name: "Onboarding" });
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

export { SplashScreen };
