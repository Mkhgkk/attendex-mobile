import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import CardScreen from "../components/CardScreen";
import { Form, FormField, SubmitButton } from "../components/form";
import AppText from "../components/AppText";
import colors from "../config/colors";
import * as Yup from "yup";

function RegisterScreen() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <CardScreen header={<AppText style={styles.title}>Register</AppText>}>
      <View style={styles.form}>
        <AppText style={styles.welcome}>
          Let's start new life with Attendex!
        </AppText>
        <Form
          initialValues={{
            phone: "",
            password: "",
            passwordConfrimation: "",
            name: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
            color="secondary"
          />
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
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password Confirm"
            name="passwordConfrimation"
            secureTextEntry
            textContextType="password"
            color="secondary"
          />

          <SubmitButton title="register" padding={15} width="40%" />
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
  passwordConfrimation: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password doesn't match")
    .label("Password Confirmation"),
  name: Yup.string().required().min(3).label("Name"),
});

export default RegisterScreen;
