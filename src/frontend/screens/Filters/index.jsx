import { GenericButtonOnOff } from '../../molecules';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from "react-native";
import { SmallTitle , IconButton, SearchBar, SwitchButton } from "../../atom";
import React from "react";
import colors from "../../misc/Colors";

const icons = {
  group: require("../../../assets/closeCircle.png"),
};

function Filter() {

  return (
    <View style={styles.container}>
        <View style={styles.topPart}>
          <View style={styles.filterTop}>
              <TouchableOpacity>
              <Text style={styles.touchableTitle}>
                Reset
              </Text>
              </TouchableOpacity>
              <SmallTitle text="Filter"></SmallTitle>
              <IconButton img={icons.group} />
          </View>
        </View>
        <View style={styles.container}>
            <View style={styles.subtitle}>
              <Text>Order ASC/DESC</Text>
            </View>
            <View
                style={styles.smallContainer}>
                <GenericButtonOnOff 
                  text="Sorting by Level Ascending">
                </GenericButtonOnOff>
                <GenericButtonOnOff text="Sorting by Level Descending">
                </GenericButtonOnOff>
            </View>
            <View style={styles.subtitle}>
              <Text>Filter By Level</Text>
            </View>
            <View
              style={styles.smallContainer}>
                <View style={styles.toggleView}>
                  <GenericButtonOnOff
                    text="1st"></GenericButtonOnOff>
                  <GenericButtonOnOff
                    text="2nd"></GenericButtonOnOff>
                  <GenericButtonOnOff
                    text="3rd"></GenericButtonOnOff>
                  <GenericButtonOnOff
                    text="4th"></GenericButtonOnOff>
                </View>
                <View style={styles.toggleView}>
                  <GenericButtonOnOff
                    text="5th"></GenericButtonOnOff>
                  <GenericButtonOnOff
                    text="6th"></GenericButtonOnOff>
                  <GenericButtonOnOff
                    text="7th"></GenericButtonOnOff>
                  <GenericButtonOnOff
                    text="8th"></GenericButtonOnOff>
                </View>
            </View>
            <View style={styles.subtitle}>
              <Text>Filter By Class</Text>
            </View>
            <View
              style={styles.smallContainer}>
                <View style={styles.toggleView}>
                  <GenericButtonOnOff
                    text="Bard"></GenericButtonOnOff>
                  <GenericButtonOnOff
                    text="Cleric"></GenericButtonOnOff>
                  <GenericButtonOnOff
                    text="Druid"></GenericButtonOnOff>
                </View>
                <View style={styles.toggleView}>
                  <GenericButtonOnOff
                    text="Paladin"></GenericButtonOnOff>
                  <GenericButtonOnOff
                    text="Ranger"></GenericButtonOnOff>
                  <GenericButtonOnOff
                    text="Wizard"></GenericButtonOnOff>
                </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  topPart: {
    height: 100,
    paddingHorizontal: 15,
    paddingTop: 60,
    backgroundColor: colors.light_gray,
    borderBottomWidth: 1,
    borderColor: colors.dark_gray,
  },
  filterTop: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    
  },
  smallContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: colors.dark_gray,
    flexDirection: "column",
  },
  toggleView: {
    flex: 1,
    alignContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  touchableTitle: {
      fontWeight: 'bold',
      fontStyle: "italic",
      fontSize: 18,
      backgroundColor: colors.ruby_red,
  },
  subtitle: {
    fontSize: 12,
    color: colors.dark_gray,
    padding: 5,
    alignItems: "center",
    fontWeight: "bold",
  }
});

export { Filter };


