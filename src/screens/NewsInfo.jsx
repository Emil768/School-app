import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Dimensions, Image, Text, View } from "react-native";
import cheerio from "react-native-cheerio";
import { ScrollView } from "react-native-gesture-handler";

function NewsInfo({ navigation, route }) {
  const [value, onChangeText] = useState(route.params.title);
  const [data, setData] = useState({ images: [] });

  async function loadGraphicCards() {
    const searchUrl = `https://shkola-4-belogorsk.nubex.ru/${route.params.url}`;
    const response = await fetch(searchUrl);
    const htmlString = await response.text();

    const $ = cheerio.load(htmlString);

    $(".columnsGallery>.columnsGalleryGrid").map((i, item) => {
      const img = $("a", item).attr("href");
      return setData((prev) => ({
        images: [...prev.images, img],
      }));
    });
  }

  useEffect(() => {
    navigation.setOptions({
      title: value === "" ? "No title" : value,
    });
    loadGraphicCards();
  }, [navigation, value]);

  return (
    <View style={styles.content}>
      <ScrollView style={styles.newsScroll}>
        <Text style={styles.title}>{route.params.title}</Text>
        <Text style={styles.text}>{route.params.text}</Text>
        <View style={styles.imagesWrapper}>
          {data.images.map((item, index) => {
            if (item) {
              return (
                <View style={styles.imageWrapper} key={index}>
                  <Image
                    source={{ uri: item }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </View>
              );
            }
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  newsScroll: {
    paddingHorizontal: 10,
    width: Dimensions.get("window").width,
  },
  imagesWrapper: {
    width: "100%",
  },
  imageWrapper: {
    width: "100%",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").width,
    borderRadius: 8,
  },
  title: {
    lineHeight: 20,
    marginBottom: 10,
    fontWeight: "700",
  },
  text: {
    lineHeight: 20,
    marginBottom: 10,
  },
});

export default NewsInfo;
