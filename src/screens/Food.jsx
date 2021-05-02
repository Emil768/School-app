import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { food } from "../../public/food";
import FoodInfo from "../components/FoodInfo";

function Food() {
  const [sortPrice, setSortPrice] = useState(null);
  const [data, setData] = useState(food);

  const handlerSortPrice = () => {
    setSortPrice(!sortPrice);
    const res = data.sort((a, b) => {
      return sortPrice ? a.price - b.price : b.price - a.price;
    });
    setData(res);
  };
  return (
    <View style={styles.content}>
      <View style={styles.contentTop}>
        <Text style={styles.text}>График</Text>
        <Text style={styles.text}>Наименование</Text>
        <TouchableOpacity
          style={styles.priceWrapper}
          onPress={handlerSortPrice}
        >
          <Text style={styles.priceText}>Цена</Text>
          <View style={styles.buttonsSortWrapper}>
            <FontAwesome
              name="sort-up"
              size={30}
              color={sortPrice === false ? "#3289EC" : "#000"}
              style={styles.buttonSort}
            />
            <FontAwesome
              name="sort-down"
              size={30}
              color="black"
              color={sortPrice === true ? "#3289EC" : "#000"}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.foodWrapper}>
        {data.map((item) => {
          return <FoodInfo key={item.id} {...item} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },

  contentTop: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    marginRight: 10,
    fontWeight: "bold",
  },
  buttonsSortWrapper: {
    position: "relative",
  },
  buttonSort: {
    position: "absolute",
  },
  foodWrapper: {
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default Food;
