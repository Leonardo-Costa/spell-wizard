import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        title={"tabs"}
        onPress={() => {
          navigation.navigate("Tabs");
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

export { Login };
