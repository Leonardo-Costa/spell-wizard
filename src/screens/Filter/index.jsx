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
import { FilterByStars } from "../../molecules";
import colors from "../../misc/Colors";
import { FilterContext } from "../../contexts/filters";

const icons = {
  close: require("../../../assets/Close_Circle.png"),
};

function Filter({ setModalVisible, setApply }) {
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setApply(true);
              setModalVisible(false);
            }}
          >
            <Text
              style={{
                marginRight: 20,
                fontWeight: "500",
                textDecorationLine: "underline",
                color: colors.dark_gray,
              }}
            >
              Apply
            </Text>
          </TouchableOpacity>

          <Button
            image={icons.close}
            size={24}
            btnHeight={20}
            btnWidth={20}
            color={colors.dark_gray}
            style={{ width: 60 }}
            alignSelf="flex-end"
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingBottom: 80 }}>
          <SortBy />
          <Separator />
          <FilterByLevel />
          <Separator />
          <FilterByClass />
          <Separator />
          <FilterBySchool />
          <Separator />
          <FilterByStars />
        </View>
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
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.dark_gray,
  },
});

export { Filter };
