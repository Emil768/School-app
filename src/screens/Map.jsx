import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

function Map() {
  return (
    <View style={styles.content}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.05894,
          longitude: 34.561792,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        <Marker
          coordinate={{ latitude: 45.05894, longitude: 34.561792 }}
          pinColor="#000"
        >
          <Callout>
            <Text>МБОУ Белогорская СШ №4</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Map;
