import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import cheerio from "react-native-cheerio";
import { ScrollView } from "react-native-gesture-handler";

import NewsInfo from "../components/NewsInfo";

function News() {
  const [data, setData] = useState({ news: [] });

  async function loadGraphicCards() {
    const searchUrl = `https://shkola-4-belogorsk.nubex.ru/gallery/`;
    const response = await fetch(searchUrl);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString, {
      withDomLvl1: true,
      normalizeWhitespace: false,
      xmlMode: false,
      decodeEntities: true,
    });

    $(".gallery>.rubricItem").map((i, item) => {
      const title = $(".link-title a", item).text();
      const text = $(".notice", item).text();
      const imgUrl = $(".rubricImage img", item).attr("src");
      const url = $(".link-title a", item).attr("href");

      return setData((prev) => ({
        news: [
          ...prev.news,
          {
            title,
            text,
            imgUrl,
            url,
          },
        ],
      }));
    });
  }
  useEffect(() => {
    loadGraphicCards();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: 20,
      }}
    >
      <TextInput
        placeholder="Поиск"
        style={{
          width: Dimensions.get("window").width - 20,
          backgroundColor: "#F6F6F6",
          borderRadius: 100,
          borderWidth: 1,
          borderColor: "#E8E8E8",
          paddingVertical: 5,
          paddingHorizontal: 16,
          marginBottom: 40,
        }}
      />
      <ScrollView
        style={{
          paddingBottom: 10,
          maxWidth: Dimensions.get("window").width,
          paddingHorizontal: 10,
        }}
      >
        {data.news.map((item, index) => {
          return <NewsInfo {...item} key={index} />;
        })}
      </ScrollView>
      <View>
        <Text>1 2 3 4</Text>
      </View>
    </View>
  );
}

export default News;
