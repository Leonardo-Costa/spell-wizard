import { ScrollView, StyleSheet, Text, View } from "react-native";
import { IconButton } from "../../atom";
import React, { useContext } from "react";
import colors from "../../misc/Colors";
import { FilterContext } from "../../contexts/filters";

const icons = {
  close: require("../../../assets/Close_Circle.png"),
};

function LastRolls({ result, setDiceModalVisible }) {
  const List = () => {
    const auxReversed = lastRolls.slice().reverse();
    return auxReversed.map((roll, index) => (
      <View
        key={index}
        style={{
          width: "100%",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: colors.dark_gray,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {roll}
        </Text>
      </View>
    ));
  };
  const { lastRolls } = useContext(FilterContext);
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
            onPress={() => setDiceModalVisible(false)}
          />
        </View>
        <ScrollView
          style={{
            flex: 1,
            width: "100%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <List />
        </ScrollView>
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

export { LastRolls };
