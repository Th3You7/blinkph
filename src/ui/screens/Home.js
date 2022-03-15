import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";
import Container from "../components/Container";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import generateToken from "../../assets/token";
import { LOG_IN } from "../../assets/constants";
import { MainContext } from "../../providers/Provider";

const schema = yup.object({
  // email: z.string().email(),
  name: yup.string("enter your name here").required(),
  email: yup.string().email("Enter a valid E-mail or username").required(),
  age: yup.number().positive().integer("Enter a valid age").required(),
});

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { dispatch } = useContext(MainContext);

  const onSubmit = (data) => {
    //generate a fake token
    const token = generateToken(32);
    dispatch({ type: LOG_IN, payload: token });
  };

  return (
    <Container>
      <Text style={styles.header}>Enter Your Data</Text>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={"Your Full Name"}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={"Age"}
          />
        )}
        name="age"
      />

      {errors.age && <Text style={styles.error}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={"Email"}
          />
        )}
        name="email"
      />

      {errors.email && <Text style={styles.error}>This is required.</Text>}
      <View style={styles.mb} />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  error: {
    color: "red",
  },

  mb: {
    height: 24,
  },
});
