import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import { StyleSheet } from "react-native";

function Contacts() {
  return (
    <View style={styles.content}>
      <View style={styles.contentTop}>
        <View style={styles.logo}>
          <Image source={require("../img/school.png")} />
        </View>
      </View>
      <View style={styles.contactWrapper}>
        <View style={styles.contactInfo}>
          <FontAwesome5 name="map-marker-alt" size={24} color="black" />
          <Text style={styles.contactText}>
            Г. Белогорск Республики Крым ул. Мусы Мамута, 1
          </Text>
        </View>
        <View style={styles.contactInfo}>
          <MaterialCommunityIcons name="web" size={24} color="black" />
          <Text style={styles.contactText}>
            https://shkola-4-belogorsk.nubex.ru/
          </Text>
        </View>
        <View style={styles.contactInfo}>
          <MaterialCommunityIcons name="phone" size={24} color="black" />
          <Text style={styles.contactText}>9(365)999-20-27</Text>
        </View>
        <View style={styles.contactInfo}>
          <MaterialCommunityIcons name="email" size={24} color="black" />
          <Text style={styles.contactText}>belogorskaya.shkola4@mail.ru</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentTop: {
    backgroundColor: "#507299",
    height: "25%",
    position: "relative",
    width: "100%",
  },
  logo: {
    position: "absolute",
    bottom: -40,
    alignItems: "center",
    width: "100%",
  },
  contactWrapper: {
    paddingHorizontal: 20,
    marginTop: 100,
  },
  contactInfo: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingBottom: 20,
    marginBottom: 20,
  },
  contactText: {
    marginLeft: 15,
    fontSize: 14,
  },
});

export default Contacts;
