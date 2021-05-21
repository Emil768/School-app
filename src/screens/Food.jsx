import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import { food } from "../../public/food.db";
import FoodInfo from "../components/FoodInfo";

function Food() {
  const [sortPrice, setSortPrice] = useState(null);
  const [data, setData] = useState(food);
  const [searchValue, setSearchValue] = useState("");
  const [modal, setModal] = useState(false);

  const handlerToggleModal = () => {
    setModal(!modal);
  };

  const handlerCloseModal = () => {
    setModal(false);
  };

  const handlerSortPrice = () => {
    setSortPrice(!sortPrice);
    const res = data.sort((a, b) => {
      return sortPrice ? a.price - b.price : b.price - a.price;
    });
    setData(res);
  };

  const filterData = data.filter((item) => {
    return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  });

  return (
    <View style={styles.content}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setSearchValue(text)}
        placeholder="Поиск"
      />
      <View style={styles.contentTop}>
        <Text style={styles.text} onPress={handlerToggleModal}>
          График
        </Text>
        <Text style={styles.text}>Наименование</Text>
        <TouchableOpacity
          style={styles.priceWrapper}
          onPress={handlerSortPrice}
        >
          <Text style={styles.priceText}>Цена</Text>
          <View style={styles.buttonsSortWrapper}>
            <FontAwesome
              name="sort-up"
              size={22}
              color={sortPrice === false ? "#3289EC" : "#000"}
              style={styles.buttonSort}
            />
            <FontAwesome
              name="sort-down"
              size={22}
              color="black"
              color={sortPrice === true ? "#3289EC" : "#000"}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.foodWrapper}>
        {filterData.length ? (
          filterData.map((item) => {
            return <FoodInfo key={item.id} {...item} />;
          })
        ) : (
          <Text>Продуктов нет в наличии</Text>
        )}
      </ScrollView>
      <Modal visible={modal} transparent>
        <View style={styles.modalBackGround}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <MaterialCommunityIcons
                name="close"
                size={24}
                color="black"
                onPress={handlerCloseModal}
              />
            </View>
            <View>
              <Image
                source={require("../img/chartFood.png")}
                style={styles.modalImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </Modal>
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
  input: {
    width: Dimensions.get("window").width - 20,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    paddingVertical: 5,
    paddingHorizontal: 16,
    marginBottom: 20,
  },

  contentTop: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    fontWeight: "bold",
    marginBottom: 40,
    width: "100%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    fontSize: 14,
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
  modal: {
    //
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 8,
  },
  modalHeader: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  modalImage: {
    width: 280,
    height: 280,
  },
});

export default Food;
