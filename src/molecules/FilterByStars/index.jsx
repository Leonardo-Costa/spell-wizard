import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import colors from "../../misc/Colors";
import SwipeableRating from "react-native-swipeable-rating";
import { FilterContext } from "../../contexts/filters";
import { SmallTitle } from "../../atom";

const icons = {
  star: require("../../../assets/star.png"),
};

function FilterByStars() {
  const { stars, setStars } = useContext(FilterContext);
  const [rating, setRating] = useState(5);
  const handleRating = (number) => {
    setStars(number);
  };
  return (
    <View>
      <SmallTitle>Rating</SmallTitle>
      <SwipeableRating
        rating={stars}
        size={36}
        gap={8}
        onPress={(number) => {
          handleRating(number);
        }}
        xOffset={30}
        color={colors.white}
        emptyColor={colors.dark_gray}
        allowHalves
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export { FilterByStars };
