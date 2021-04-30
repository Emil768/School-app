import React from "react";
import { View, Text, Button, Image } from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";

function Home({ navigation }) {
  console.log(navigation);

  const handlerNavigate = (name) => {
    navigation.navigate(name);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          backgroundColor: "#507299",
          height: "40%",
          position: "relative",
          width: "100%",
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: -40,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              marginBottom: 30,
              color: "#fff",
              fontSize: 22,
            }}
          >
            МБОУ "Белогорская средняя школа № 4"{" "}
          </Text>
          <Image source={require("../img/school.png")} />
        </View>
      </View>

      <View style={{ marginTop: 80 }}>
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
      </View>
    </View>
  );
}

export default Home;
