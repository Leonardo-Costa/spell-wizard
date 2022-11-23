import { Button, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import colors from "../../misc/Colors";
import { SmallTitle } from "../../atom";
import { StackActions } from "@react-navigation/native";

const images = {
  logo: require("../../../assets/logo.png"),
};

function OnboardingScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        bottomBarColor={colors.white}
        onSkip={() => {
          navigation.dispatch(StackActions.replace("Login"));
        }}
        onDone={() => {
          navigation.dispatch(StackActions.replace("Login"));
        }}
        pages={[
          {
            backgroundColor: colors.white,
            image: (
              <View style={styles.image}>
                <Image source={images.logo} />
              </View>
            ),
            title: <SmallTitle>Bem vindo ao SpellWizard</SmallTitle>,
            subtitle: (
              <Text style={styles.subtitle}>
                Seu grimório de bolso pessoal para acompanhar suas jornadas!
              </Text>
            ),
          },
          {
            backgroundColor: colors.white,
            image: (
              <View style={styles.image}>
                <Image source={images.logo} />
              </View>
            ),
            title: <SmallTitle>Uma biblioteca ancestral</SmallTitle>,
            subtitle: (
              <Text style={styles.subtitle}>
                Com uma coleção enorme de feitiços originais disponíveis para
                serem usados
              </Text>
            ),
          },
          {
            backgroundColor: colors.white,
            image: (
              <View style={styles.image}>
                <Image source={images.logo} />
              </View>
            ),
            title: <SmallTitle>Magias personalizadas</SmallTitle>,
            subtitle: (
              <Text style={styles.subtitle}>
                Sendo possível editar magias existentes e até criar as suas
                próprias
              </Text>
            ),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    backgroundColor: colors.primary,
    borderRadius: 200,
    padding: 40,
    elevation: 20,
  },
  subtitle: {
    color: colors.dark_gray,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    width: "60%",
    marginTop: 40,
  },
});

export { OnboardingScreen };