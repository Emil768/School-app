import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

import { schedule } from "../../public/schedule.db";

function Schedule() {
  const [selectedStaff, setSelectedStaff] = useState(schedule[0].title);
  const [activeDay, setActiveDay] = useState(0);
  return (
    <View style={styles.content}>
      <View style={styles.pickerWrapper}>
        <Picker
          style={styles.picker}
          selectedValue={selectedStaff}
          onValueChange={(itemValue) => setSelectedStaff(itemValue)}
        >
          {schedule.map((item, index) => {
            return (
              <Picker.Item label={item.title} value={item.title} key={index} />
            );
          })}
        </Picker>
      </View>

      <ScrollView contentContainerStyle={styles.scheduleWrapper}>
        {schedule.map((item, index) => {
          return (
            <View style={styles.scheduleBlock} key={index}>
              {selectedStaff === item.title
                ? item.days.map((item, index) => {
                    return (
                      <View key={index} style={styles.scheduleBlockWrapper}>
                        <Text style={styles.scheduleDay}>{item.day}</Text>
                        <Image
                          source={item.img}
                          style={styles.scheduleImage}
                          resizeMode="contain"
                        />
                      </View>
                    );
                  })
                : null}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  contentTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  pickerWrapper: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#E8E8E8",
    height: 40,
    width: 250,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  picker: {
    flex: 1,
    width: "100%",
  },
  scheduleWrapper: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 10,
    // height: "100%",
  },
  scheduleBlock: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  scheduleBlockWrapper: {
    marginBottom: 20,
    backgroundColor: "#ffff",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    position: "relative",
    width: "48%",
  },
  scheduleIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  scheduleDay: {
    marginBottom: 10,

    fontSize: 14,
  },
  scheduleImage: {
    width: "100%",
    height: 100,
  },
});

export default Schedule;
