import React from "react";
import { View, Text, Button } from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";

function Home({ navigation }) {
  console.log(navigation);

  const handlerNavigate = (name) => {
    navigation.navigate(name);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "#000", fontWeight: "800" }}>
        <View>
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
      </Text>
    </View>
  );
}

export default Home;
