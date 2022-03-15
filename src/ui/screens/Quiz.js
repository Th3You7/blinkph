import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Pressable, Button } from "react-native";
import { SELECT } from "../../assets/constants";

import { question } from "../../assets/question";
import { SCREENS } from "../../assets/screens";
import { MainContext } from "../../providers/Provider";
import Container from "../components/Container";

export default function Quiz() {
  const [isSelected, setSelection] = useState(0);
  const { dispatch } = useContext(MainContext);
  const navigation = useNavigation();

  const { content, options } = question;
  const handlePress = (i) => {
    setSelection(i);
    dispatch({ type: SELECT, payload: i });
  };

  const handleResult = () => {
    navigation.navigate(SCREENS.RESULT);
  };

  return (
    <Container>
      <Text style={styles.question}>{content}</Text>

      {options.map((x, i) => {
        return (
          <Pressable
            key={i}
            style={[
              styles.view,
              { borderColor: isSelected === i ? "blue" : "grey" },
            ]}
            onPress={() => handlePress(i)}
          >
            {/* <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          /> */}
            <Text style={styles.label}>{x}</Text>
          </Pressable>
        );
      })}

      <Button title="See Result" onPress={handleResult} />
    </Container>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: 32,
    marginBottom: 24,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    fontSize: 16,
    color: "black",
  },
  view: {
    borderWidth: 2,
    borderColor: "grey",
    marginBottom: 16,
  },
});
