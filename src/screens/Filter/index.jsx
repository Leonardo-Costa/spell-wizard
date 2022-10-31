import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FilterByLevel, FilterByName, SortBy } from "../../organisms";
import { Separator, Button } from "../../atom";
import colors from "../../misc/Colors";

const icons = {
  close: require("../../../assets/Close_Circle.png"),
};

function Filter({ setModalVisible }) {
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
        <TouchableOpacity>
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
        <FilterByName
          name="Class"
          titles={[
            "bard",
            "cleric",
            "druid",
            "paladin",
            "ranger",
            "sorcerer",
            "warlock",
            "wizard",
          ]}
        />
        <Separator />
        <FilterByName
          name="School of Magic"
          titles={[
            "Conjuration",
            "Necromancy",
            "Evocation",
            "Abjuration",
            "Divination",
            "Enchantment",
            "Illusion",
            "Transmutation",
          ]}
        />
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
