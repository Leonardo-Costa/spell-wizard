import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import {
  FilterByLevel,
  FilterByClass,
  FilterBySchool,
  SortBy,
} from "../../organisms";
import { Separator, Button } from "../../atom";
import colors from "../../misc/Colors";
import { FilterContext } from "../../contexts/filters";

const icons = {
  close: require("../../../assets/Close_Circle.png"),
};

function Filter({ setModalVisible }) {
  const { setAscending, setLevel, setClasses, setSchools } =
    useContext(FilterContext);
  const handleReset = () => {
    setAscending(true);
    setLevel([true, true, true, true, true, true, true, true, true, true]);
    setClasses([true, true, true, true, true, true, true, true]);
    setSchools([true, true, true, true, true, true, true, true]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            handleReset();
          }}
        >
          <Text style={styles.title}>Reset</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { textAlign: "center" }]}>Filters</Text>
        <Button
          image={icons.close}
          size={24}
          btnHeight={20}
          btnWidth={60}
          color={colors.dark_gray}
          style={{ width: 60 }}
          alignSelf="flex-end"
          onPress={() => {
            setModalVisible(false);
          }}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <SortBy />
        <Separator />
        <FilterByLevel />
        <Separator />
        <FilterByClass />
        <Separator />
        <FilterBySchool />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    width: 60,
    fontSize: 24,
    fontWeight: "700",
    color: colors.dark_gray,
  },
});

export { Filter };
