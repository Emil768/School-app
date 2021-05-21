import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

function NewsBlock({ title, text, imgUrl, url, navigate }) {
  return (
    <View style={styles.content}>
      {imgUrl ? (
        <Image
          source={{
            uri: imgUrl,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.emptyImage}></View>
      )}
      <Text
        style={styles.title}
        numberOfLines={2}
        ellipsizeMode="clip"
        onPress={() => navigate(title, url, text)}
      >
        {title}
      </Text>
      <Text style={styles.text} numberOfLines={2} ellipsizeMode="clip">
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    marginBottom: 20,
  },
  image: {
    height: 150,
    marginBottom: 20,
    borderRadius: 8,
  },
  emptyImage: {
    backgroundColor: "#F6F6F6",
    height: 150,
    marginBottom: 20,
    borderRadius: 8,
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 10,
  },
  text: {
    lineHeight: 20,
    width: "100%",
  },
});

export default NewsBlock;
