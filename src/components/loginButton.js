import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SubmitButton = () => {
  const handlePress = () => {
    // Your button press logic here
    alert('Button Pressed!');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Continuar</Text>
      </View>
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





