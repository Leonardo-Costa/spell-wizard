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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";


const icons = {
  logo: require("../../../assets/logo.png"),
  button: require("../../../assets/Frame.png"),
};

function SignUp({ navigation }) {
  //const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ref_input2 = useRef();
  //const ref_input3 = useRef();

  //const [UsercreateUserWithEmailAndPassword,user,loading,error] = createUserWithEmailAndPassword(auth);

    function handleSignOut() {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("usuario criado");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        if(error.code === 'auth/email-already-in-use') {
          console.log("Email já existe");
        }
        if(error.code === 'auth/invalid-email') {
          console.log("Email inválido");
        }
      });
  } 

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
          value={email}
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.light_gray}
          value={password}
          placeholder="senha"
          ref={ref_input2}
          onChangeText={(password) => {
            setPassword(password);
          }}
          secureTextEntry
        />
        {email.length > 0 && password.length > 0 ? (
          <TouchableOpacity style={styles.login} onPress={handleSignOut}>
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
