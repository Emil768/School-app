import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//components

//tabs
function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, color: "#000", fontWeight: "800" }}>
        Home
      </Text>
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

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Gallery" component={Gallery} />
        <Tab.Screen name="Sport" component={Sport} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
