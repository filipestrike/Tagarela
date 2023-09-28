import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SubmitButton = ({onPress, buttonStyle, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>Continuar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5C5CB4",
    borderColor: "#5C5CB4",
    borderWidth: 1,
    borderRadius: 30,
    width: 335,
    height: 79,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    alignItems: "center",
    paddingVertical: 10,
    fontFamily: "LexendExa_400Regular",
    fontSize: 24,
    fontWeight: 400,
    width: "100%",
  },
});

export default SubmitButton;





