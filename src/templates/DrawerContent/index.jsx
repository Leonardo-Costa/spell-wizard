import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../misc/Colors";

function DrawerContent({ setDrawerOpen }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ backgroundColor: "red", padding: 20 }}
        onPress={() => {
          setDrawerOpen(false);
          console.log("oi");
        }}
      >
        <Text>DrawerContent</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export { DrawerContent };
