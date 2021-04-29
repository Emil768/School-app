import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ButtonPrimary from "../components/ButtonPrimary";

//components

//tabs
function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "#000", fontWeight: "800" }}>
        <View>
          <ButtonPrimary title="Новости" />
          <ButtonPrimary title="Сотрудники" />
          <ButtonPrimary title="Питание" navigator={navigation} />
        </View>
      </Text>
    </View>
  );
}

function News({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "#000", fontWeight: "800" }}>
        Новости
      </Text>
      <Button title="Вернуться" onPress={() => navigation.goBack()}></Button>
    </View>
  );
}

function Gallery() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "#000", fontWeight: "800" }}>
        Gallery
      </Text>
    </View>
  );
}

function Sport() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "#000", fontWeight: "800" }}>
        Sport
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Sport" component={Sport} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
