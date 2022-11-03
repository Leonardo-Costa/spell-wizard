import { StyleSheet, Text, View } from "react-native";
import React from "react";

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
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
