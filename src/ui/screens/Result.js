import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { LOG_IN, SELECT } from "../../assets/constants";
import { question } from "../../assets/question";
import { MainContext } from "../../providers/Provider";
import Container from "../components/Container";

export default function Result() {
  const {
    state: { answer },
    dispatch,
  } = useContext(MainContext);
  const nav = useNavigation();
  const { rightAnswer, options } = question;
  const handleReset = () => {
    dispatch({ type: LOG_IN, payload: "" });
    dispatch({ type: SELECT, payload: 0 });
  };

  const handleBack = () => {
    nav.goBack();
  };
  return (
    <Container>
      <Text style={styles.heading}>Result</Text>
      <Text style={styles.res}>
        {answer == rightAnswer
          ? `CONGRTS! ${options[answer]}, is The Right Answer`
          : `Your Answer: ${options[answer]}, is Wroooooong!`}
      </Text>
      {!(answer == rightAnswer) && (
        <Button title="select another answer" onPress={handleBack} />
      )}

      <View style={{ height: 16 }} />

      <Button title="reset" onPress={handleReset} />
    </Container>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    marginBottom: 24,
  },

  res: {
    fontSize: 24,
    marginBottom: 24,
  },
});
