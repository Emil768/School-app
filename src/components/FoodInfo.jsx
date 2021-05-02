import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
function FoodInfo({ image, title, price }) {
  return (
    <View style={styles.contentFood}>
      <Image source={image} style={styles.image} resizeMode="center" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price} руб.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentFood: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 15,
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 14,
    width: 150,
    textAlign: "center",
  },
  image: {
    width: 70,
    height: 60,
  },
  price: {
    fontSize: 14,
  },
});

export default FoodInfo;
