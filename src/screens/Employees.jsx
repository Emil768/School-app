import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//db
import { employees } from "../../public/employees.db";
import Employee from "../components/Employee";

function Employees() {
  const [selectedStaff, setSelectedStaff] = useState("admin");
  const [view, setView] = useState("grid");

  return (
    <View style={styles.content}>
      <View style={styles.contentTop}>
        <View style={styles.pickerWrapper}>
          <Picker
            style={styles.picker}
            selectedValue={selectedStaff}
            onValueChange={(itemValue) => setSelectedStaff(itemValue)}
          >
            <Picker.Item label="Администрация школы" value="admin" />
            <Picker.Item
              label="Педагогический коллектив школы"
              value="regular"
            />
          </Picker>
        </View>
        <View style={styles.iconsWrapper}>
          <MaterialCommunityIcons
            name="view-grid"
            size={23}
            color={view === "grid" ? "#3289EC" : "#000"}
            onPress={() => setView("grid")}
          />
          <MaterialCommunityIcons
            name="view-list"
            size={30}
            color={view === "list" ? "#3289EC" : "#000"}
            onPress={() => setView("list")}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.employeesWrapper}>
        {employees.map((item) => {
          return selectedStaff == item.staff ? (
            <Employee key={item.id} {...item} view={view} />
          ) : null;
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
  },
  picker: {
    flex: 1,
    width: "100%",
  },
  employeesWrapper: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  iconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
});

export default Employees;
