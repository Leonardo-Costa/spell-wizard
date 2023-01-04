import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import React, { useState, useContext } from "react";
import colors from "../../misc/Colors";
import { DiceButton, SmallTitle } from "../../atom";
import { DiceResult, LastRolls } from "../../molecules";
import { FilterContext } from "../../contexts/filters";

const dices = [4, 6, 8, 10, 12, 20];

function RollDice() {
  const [sides, setSides] = useState(20);
  const [rolledValue, setRolledValue] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [diceModalVisible, setDiceModalVisible] = useState(false);
  const [rolls, setRolls] = useState([]);
  const { setLastRolls } = useContext(FilterContext);
  const RollDice = () => {
    let rolled = Math.floor(Math.random() * sides) + 1;
    setRolledValue(rolled);
    let temp = [...rolls, rolled];
    setRolls(temp);
    setLastRolls(temp);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SmallTitle style={{ marginBottom: 20 }}>
          Roll a {sides} sided dice
        </SmallTitle>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        {dices.map((dice) => {
          return (
            <DiceButton
              key={dice}
              number={dice}
              onPress={() => {
                setSides(dice);
              }}
            />
          );
        })}
      </View>
      <TouchableOpacity style={styles.rollDice}>
        <Text
          onPress={() => {
            RollDice();
            setModalVisible(true);
          }}
          style={styles.rollText}
        >
          Roll dice
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 10, padding: 10 }}
        onPress={() => setDiceModalVisible(true)}
      >
        <Text
          style={{ textDecorationLine: "underline", color: colors.dark_gray }}
        >
          Last values
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <DiceResult result={rolledValue} setModalVisible={setModalVisible} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={diceModalVisible}
        onRequestClose={() => {
          setDiceModalVisible(!diceModalVisible);
        }}
      >
        <LastRolls setDiceModalVisible={setDiceModalVisible} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  rollDice: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    width: "40%",
  },
  rollText: {
    color: colors.dark_gray,
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export { RollDice };
