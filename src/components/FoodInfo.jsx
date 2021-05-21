import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function FoodInfo({ image, title, price, volume }) {
  return (
    <View style={styles.contentFood}>
      <Image source={image} style={styles.image} resizeMode="center" />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{volume && volume}</Text>
      </View>
      <Text style={styles.price}>{price} руб.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentFood: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    paddingBottom: 20,
    marginBottom: 20,
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 14,
    width: 150,
    fontWeight: "700",
    marginBottom: 5,
  },
  subtitle: {
    color: "#7C7C7C",
  },
  image: {
    width: 70,
    height: 60,
  },
  textWrapper: {
    marginLeft: 10,
  },
  price: {
    fontSize: 14,
    fontWeight: "700",
  },
});

export default FoodInfo;
