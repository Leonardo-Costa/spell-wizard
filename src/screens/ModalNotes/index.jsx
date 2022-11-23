import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../../misc/Colors";

function ModalNotes() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <TextInput
          value={text}
          onChangeText={(value) => setText(value)}
          multiline
          style={styles.text}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 50,
    backgroundColor: colors.white,
    color: colors.dark_gray,
    flex: 1,
  },
});

export { ModalNotes };
