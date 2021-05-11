import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

function NewsInfo({ title, text, imgUrl, url }) {
  // title,text,imgUrl,url,
  console.log(text);
  return (
    <View
      style={{ width: Dimensions.get("window").width - 20, marginBottom: 20 }}
    >
      <Image
        source={{
          uri: imgUrl
            ? imgUrl
            : "https://www.pikpng.com/pngl/m/450-4503442_transparent-background-album-on-surprised-pikachu-no-background.png",
        }}
        style={{
          width: "100%",
          height: 150,
          marginBottom: 20,
          borderRadius: 8,
        }}
        resizeMode="cover"
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: 16,
          lineHeight: 20,
          marginBottom: 10,
        }}
        onPress={() => console.log(url)}
      >
        {title}
      </Text>
      <Text
        numberOfLines={2}
        ellipsizeMode="clip"
        style={{ lineHeight: 20, width: "100%" }}
      >
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default NewsInfo;
