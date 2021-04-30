import * as React from "react";
import { Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//screens
import Home from "../screens/Home";
import Gallery from "../screens/Gallery";
import Contacts from "../screens/Contacts";
import Food from "../screens/Food";
import Map from "../screens/Map";
import Sport from "../screens/Sport";
import News from "../screens/News";
import Employees from "../screens/Employees";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#3289EC",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sport"
        component={Sport}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="sports-kabaddi" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="images" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map-marked-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="contacts" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Employees" component={Employees} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
