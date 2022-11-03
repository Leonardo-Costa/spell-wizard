import { StyleSheet, Text, View } from "react-native";
import comentarios from "../../data/comentarios.json";
import React, { useState, useEffect } from "react";
import colors from "../../misc/Colors";
import { Icon, SmallTitle } from "../../atom";

const icons = {
  star: require("../../../assets/star.png"),
  rpgBot: require("../../../assets/RPGBOT.png"),
};

const ratings = ["Horrible", "Bad", "Okay", "Good", "Amazing"];

function RatingCard({ name }) {
  const [comments, setComments] = useState(comentarios);
  const [comment, setComment] = useState({
    Nome: "",
    Rating: "",
    Description: "",
  });
  const [found, setFound] = useState(false);

  const Stars = () => {
    let aux = [];
    for (let i = 0; i < comment.Rating; i++) {
      aux.push(i + 1);
    }

    return (
      <View style={{ flexDirection: "row", paddingTop: 5 }}>
        {aux.map((item) => {
          return (
            <View key={item} style={{ marginRight: 5 }}>
              <Icon image={icons.star} size={20} color={colors.dark_gray} />
            </View>
          );
        })}
      </View>
    );
  };

  const Card = () => {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            marginRight: 10,
          }}
        >
          <Icon image={icons.rpgBot} size={60} />
        </View>

        <View style={{ flex: 3 }}>
          <Stars />
          <SmallTitle>{ratings[comment.Rating - 1]}</SmallTitle>
          <Text
            style={{ textAlign: "justify", paddingRight: 10, marginTop: 10 }}
          >
            {comment.Description}
          </Text>
        </View>
      </View>
    );
  };

  const showComment = () => {
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].Nome == name) {
        setComment(comments[i]);
        setFound(true);
        return;
      }
    }
  };

  useEffect(() => {
    showComment();
  });

  return <View>{found ? <Card /> : null}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    flexDirection: "row",
  },
  description: {
    color: colors.dark_gray,
    fontSize: 18,
  },
});

export { RatingCard };
