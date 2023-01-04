import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "../../atom";
import React from "react";
import colors from "../../misc/Colors";

const icons = {
  close: require("../../../assets/Close_Circle.png"),
};

function DiceResult({ result, setModalVisible }) {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View
          style={{
            backgroundColor: colors.primary,
            width: "100%",
            height: 45,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <IconButton
            style={{ marginRight: 10 }}
            img={icons.close}
            onPress={() => setModalVisible(false)}
          />
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: colors.dark_gray,
              fontSize: 90,
              fontWeight: "bold",
            }}
          >
            {result}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: colors.white,
    elevation: 20,
    width: "50%",
    height: "20%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export { DiceResult };
