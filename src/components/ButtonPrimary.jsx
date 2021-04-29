import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

function ButtonPrimary(props) {
  console.log(props);
  return (
    <View style={styles.buttonContent}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => props.navigator.navigate("Новости")}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.title}</Text>
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
    marginTop: 10,
  },
});

export default ButtonPrimary;
