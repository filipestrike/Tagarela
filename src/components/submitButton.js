import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const buttonWidth = Math.min(width, height) * 0.45; // Button width based on screen size
const fontSize = Math.min(width, height) * 0.04; // Font size based on screen size

const SubmitButton = ({ onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { width: buttonWidth }, buttonStyle]}>
      <Text style={[styles.buttonText, { fontSize: fontSize }, textStyle]}>Continuar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#5C5CB4",
    borderColor: "#5C5CB4",
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    alignItems: "center",
    paddingVertical: 8,
    fontFamily: "LexendExa_400Regular",
    fontWeight: '400',
    width: "100%",
  },
});

export default SubmitButton;