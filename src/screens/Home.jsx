import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";

function Home({ navigation }) {
  const handlerNavigate = (name) => {
    navigation.navigate(name);
  };
  return (
    <View style={styles.content}>
      <View style={styles.topWrapper}>
        <View style={styles.topContent}>
          <Text style={styles.title}>
            МБОУ "Белогорская средняя школа № 4"{" "}
          </Text>
          <Image source={require("../img/school.jpeg")} style={styles.image} />
        </View>
      </View>

      <View style={styles.buttonsWrapper}>
        <ButtonPrimary
          title="Новости"
          enTitle="News"
          onNavigate={handlerNavigate}
        />
        <ButtonPrimary
          title="Сотрудники"
          enTitle="Employees"
          onNavigate={handlerNavigate}
        />
        <ButtonPrimary
          title="Питание"
          enTitle="Food"
          onNavigate={handlerNavigate}
        />
        {/* <ButtonPrimary
          title="Расписание"
          enTitle="Food"
          onNavigate={handlerNavigate}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  topWrapper: {
    backgroundColor: "#507299",
    height: "40%",
    position: "relative",
    width: "100%",
  },
  topContent: {
    position: "absolute",
    bottom: -40,
    alignItems: "center",
    width: "100%",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
    color: "#fff",
    fontSize: 22,
  },
  buttonsWrapper: {
    marginTop: 80,
  },
  image: {
    borderRadius: 100,
    width: 130,
    height: 130,
  },
});

export default Home;
