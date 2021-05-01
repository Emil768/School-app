import * as React from "react";

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

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="News"
        component={News}
        options={{
          headerTitle: "Новости",
          headerTitleAlign: "center",
        }}
      />
      <HomeStack.Screen
        name="Employees"
        component={Employees}
        options={{ headerTitle: "Сотрудники", headerTitleAlign: "center" }}
      />
      <HomeStack.Screen
        name="Food"
        component={Food}
        options={{ headerTitle: "Питание", headerTitleAlign: "center" }}
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SportStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Sport"
        component={Sport}
        options={{ headerTitle: "Спорт", headerTitleAlign: "center" }}
      />
    </SettingsStack.Navigator>
  );
}

function GalleryStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Gallery"
        component={Gallery}
        options={{ headerTitle: "Галерея", headerTitleAlign: "center" }}
      />
    </SettingsStack.Navigator>
  );
}

function MapStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Map"
        component={Map}
        options={{ headerTitle: "Карта", headerTitleAlign: "center" }}
      />
    </SettingsStack.Navigator>
  );
}

function ContactsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerTitle: "Контакты",
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#507299",
            elevation: 0,
          },
        }}
      />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "#3289EC",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Sport"
          component={SportStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="sports-kabaddi" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleryStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="images" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="map-marked-alt" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={ContactsStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="contacts" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
