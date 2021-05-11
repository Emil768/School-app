import React, { useState } from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

function Map() {
  return (
    <View style={styles.content}>
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
        
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyC_ytdxxPLSX4fJK0f_almFXpcVzhKfUik",
          language: "ru",
        }}
        fetchDetails={true}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            top: 0,
            width: "100%",
            zIndex: 1,
          },
        }}
      /> */}
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
