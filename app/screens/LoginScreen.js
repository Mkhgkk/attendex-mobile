import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import CardScreen from "../components/CardScreen";
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../components/form";
import AppText from "../components/AppText";
import colors from "../config/colors";
import * as Yup from "yup";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

function LoginScreen({ navigation }) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ phone, password }) => {
    const result = await authApi.login(phone, password);
    console.log(result);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.loginWithToken(result.data);
  };

  return (
    <CardScreen header={<AppText style={styles.title}>Login</AppText>}>
      <View style={styles.form}>
        <AppText style={styles.welcome}>Here To Get Welcome!</AppText>
        <Form
          initialValues={{ phone: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon="cellphone"
            keyboardType="numeric"
            name="phone"
            placeholder="Phone number"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContextType="password"
          />
          <ErrorMessage
            error="Invalid email and/or password."
            visible={loginFailed}
          />
          <SubmitButton title="login" padding={15} width="40%" />
        </Form>
      </View>

      <AppText style={styles.logo}>Attendex</AppText>
    </CardScreen>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    padding: 30,
  },
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.primary_dark,
    width: 225,
    marginBottom: 20,
    marginTop: 50,
  },
  logo: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.primary_dark,
    position: "absolute",
    bottom: 5,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    textAlign: "center",
    paddingBottom: 10,
  },
});

const validationSchema = Yup.object().shape({
  phone: Yup.string().required().min(5).label("Phone number"),
  password: Yup.string().required().min(6).label("Password"),
});

export default LoginScreen;
