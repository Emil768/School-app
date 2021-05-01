import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
function Employee({ id, name, position, photo, view }) {
  return (
    <View
      style={view === "grid" ? styles.employee : styles.employeeList}
      key={id}
    >
      <Image source={{ uri: photo }} style={styles.employeePhoto} />
      <Text style={styles.employeeName}>{name}</Text>
      <View style={styles.buttonContent}>
        {position.map((title, index) => {
          return (
            <TouchableOpacity activeOpacity={0.9} key={index}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  employee: {
    marginBottom: 20,
    width: 170,
    alignItems: "center",
  },
  employeeList: {
    marginBottom: 20,
    width: 350,
    alignItems: "center",
  },
  employeePhoto: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginBottom: 10,
  },
  employeeName: {
    textAlign: "center",
    marginBottom: 10,
  },
  buttonContent: {
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  button: {
    width: "100%",
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#507299",
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
});

export default Employee;
