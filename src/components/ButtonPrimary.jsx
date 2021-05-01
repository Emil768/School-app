import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

function ButtonPrimary({ title, enTitle, onNavigate }) {
  return (
    <View style={styles.buttonContent}>
      <TouchableOpacity activeOpacity={0.9} onPress={() => onNavigate(enTitle)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 80,
    backgroundColor: "#507299",
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  buttonContent: {
    marginTop: 15,
  },
});

export default ButtonPrimary;
