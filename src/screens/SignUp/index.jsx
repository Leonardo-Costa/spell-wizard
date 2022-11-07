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
import React, { useState, useRef } from "react";
import colors from "../../misc/Colors";
import { StackActions } from "@react-navigation/native";

const icons = {
  logo: require("../../../assets/logo.png"),
  button: require("../../../assets/Frame.png"),
};

function SignUp({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ref_input2 = useRef();
  const ref_input3 = useRef();

  return (
    <View style={styles.container}>
      <Icon image={icons.logo} size={160} color={colors.dark_gray} />
      <View style={{ flexDirection: "row", marginTop: 40, marginBottom: 80 }}>
        <Text style={[styles.title]}>Spell</Text>
        <Text style={[styles.title, { fontWeight: "900" }]}>Wizard</Text>
      </View>
      <View style={styles.smallContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.light_gray}
          value={nome}
          placeholder="Digite seu nome"
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
          onChangeText={(nome) => {
            setNome(nome);
          }}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.light_gray}
          value={email}
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          onSubmitEditing={() => ref_input3.current.focus()}
          ref={ref_input2}
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.light_gray}
          value={password}
          placeholder="senha"
          ref={ref_input3}
          onChangeText={(password) => {
            setPassword(password);
          }}
          secureTextEntry
        />
        {nome.length > 0 && email.length > 0 && password.length > 0 ? (
          <TouchableOpacity style={styles.login}>
            <Text style={styles.inputText}>Cadastrar</Text>
          </TouchableOpacity>
        ) : null}
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <Text style={[styles.button, { textDecorationLine: "none" }]}>
              Já tem uma conta?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(StackActions.replace("Login"));
              }}
            >
              <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(StackActions.replace("Tabs"));
            }}
          >
            <Text style={styles.button}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  smallContainer: {
    width: "80%",
  },
  title: {
    fontSize: 60,
    color: colors.dark_gray,
    fontWeight: "600",
  },
  input: {
    backgroundColor: colors.white,
    width: "100%",
    height: 50,
    padding: 10,
    borderRadius: 10,
    elevation: 10,
    marginBottom: 20,
  },
  login: {
    backgroundColor: colors.dark_gray,
    padding: 20,
    borderRadius: 10,
    elevation: 10,
    width: "100%",
    alignItems: "center",
  },
  button: {
    fontSize: 16,
    color: colors.dark_gray,
    fontWeight: "600",
    textDecorationLine: "underline",
    paddingVertical: 10,
  },
  inputText: {
    color: colors.white,
    fontWeight: "600",
  },
});

export { SignUp };
