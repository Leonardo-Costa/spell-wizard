import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Icon } from "../../atom";
import React, { useState } from "react";
import colors from "../../misc/Colors";
import { StackActions } from "@react-navigation/native";

const icons = {
  logo: require("../../../assets/logo.png"),
  button: require("../../../assets/Frame.png"),
};

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Icon image={icons.logo} size={160} color={colors.dark_gray} />
      <View style={{ flexDirection: "row", marginTop: 40, marginBottom: 80 }}>
        <Text style={[styles.title]}>Spell</Text>
        <Text style={[styles.title, { fontWeight: "900" }]}>Wizard</Text>
      </View>
      <TextInput
        style={{
          backgroundColor: colors.light_gray,
          width: "80%",
          height: 50,
          padding: 10,
          borderRadius: 10,
          elevation: 20,
          marginBottom: 20,
        }}
        value={email}
        placeholder="Digite seu e-mail"
        onChangeText={(email) => {
          setEmail(email);
        }}
      />
      <TextInput
        style={{
          backgroundColor: colors.light_gray,
          width: "80%",
          height: 50,
          padding: 10,
          borderRadius: 10,
          elevation: 20,
        }}
        value={password}
        placeholder="senha"
        onChangeText={(password) => {
          setEmail(setPassword);
        }}
        secureTextEntry
      />
      <TouchableOpacity
        style={{ padding: 20 }}
        onPress={() => {
          navigation.dispatch(StackActions.replace("Tabs"));
        }}
      >
        <Text style={styles.button}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 60,
    color: colors.dark_gray,
    fontWeight: "600",
  },
  button: {
    fontSize: 18,
    color: colors.dark_gray,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});

export { Login };
