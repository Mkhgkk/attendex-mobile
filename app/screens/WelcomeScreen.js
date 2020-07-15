import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={[colors.primary_dark, colors.primary_light]}
      style={styles.screen}
    >
      <ImageBackground
        source={require("../assets/welcome.png")}
        style={styles.screen}
      >
        <AppScreen style={styles.container}>
          <AppText style={styles.logo}>Attendex</AppText>
          <AppText style={styles.subtitle}>Professional easy check In</AppText>

          <AppButton
            title="Login"
            color="white"
            fontColor="primary"
            padding={15}
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          {/* <AppButton
            title="Register"
            padding={15}
            onPress={() => navigation.navigate(routes.REGISTER)}
          /> */}
        </AppScreen>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
  },
  container: {
    paddingTop: 200,
    padding: 20,
  },
  logo: {
    color: colors.white,
    fontSize: 50,
    textAlign: "center",
  },
  subtitle: {
    color: colors.white,
    textAlign: "center",
    opacity: 0.8,
    fontSize: 18,
    flex: 1,
  },
});

export default WelcomeScreen;
