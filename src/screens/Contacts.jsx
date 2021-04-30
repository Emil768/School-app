import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
function Contacts() {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          backgroundColor: "#507299",
          height: "20%",
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
          {/* <Text
            style={{
              textAlign: "center",
              marginBottom: 30,
              color: "#fff",
              fontSize: 22,
            }}
          >
            МБОУ "Белогорская средняя школа № 4"{" "}
          </Text> */}
          <Image source={require("../img/school.png")} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
            paddingBottom: 15,
            marginBottom: 15,
          }}
        >
          <FontAwesome5 name="map-marker-alt" size={24} color="black" />
          <Text style={{ marginLeft: 15 }}>
            Г. Белогорск Республики Крым ул. Мусы Мамута, 1
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
            paddingBottom: 15,
            marginBottom: 15,
          }}
        >
          <MaterialCommunityIcons name="web" size={24} color="black" />
          <Text style={{ marginLeft: 15 }}>
            https://shkola-4-belogorsk.nubex.ru/
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
            paddingBottom: 15,
            marginBottom: 15,
          }}
        >
          <MaterialCommunityIcons name="phone" size={24} color="black" />
          <Text style={{ marginLeft: 15 }}>9(365)999-20-27</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#E8E8E8",
            paddingBottom: 15,
          }}
        >
          <MaterialCommunityIcons name="email" size={24} color="black" />
          <Text style={{ marginLeft: 15 }}>belogorskaya.shkola4@mail.ru</Text>
        </View>
      </View>
    </View>
  );
}

export default Contacts;
