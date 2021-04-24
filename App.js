import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Белогорская школа #4</Text>
      <Image
        source={{
          uri:
            "https://sun9-30.userapi.com/impg/jJD4lbUQuHYNHDvlBlCI_Rrqvhy33UAFPBCFxg/Z-OLVyuInRo.jpg?size=1200x1600&quality=96&sign=496f41d25263049b065e1a4fe237764d&type=album",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>test soasdaasdsd ya sobaka</Text>
      <Text>test soasdaasdsd ya sobaka</Text>
      <Text>test soasdaasdsd ya sobaka</Text>
      <Text>test soasdaasdsd ya sobaka</Text>
      <Button title="Новости"></Button>
      <Button title="Сотрудники"></Button>
      <Button title="Питание"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#0000",
  },
});
