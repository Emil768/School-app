import React, { useEffect, useState, useRef } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import cheerio from "react-native-cheerio";
import { ScrollView } from "react-native-gesture-handler";
import NewsBlock from "../components/NewsBlock";

import { StyleSheet } from "react-native";

function News({ navigation }) {
  const [data, setData] = useState({ news: [], page: 1 });
  const [searchValue, setSearchValue] = useState("");
  const scrollRef = useRef();

  const pages = [1, 2, 3, 4];

  const navigateToNewsInfo = (title, url, text) => {
    navigation.navigate("NewsInfo", {
      title,
      url,
      text,
    });
  };

  async function loadGraphicCards(page = 1) {
    try {
      const searchUrl = `https://shkola-4-belogorsk.nubex.ru/gallery/page_${page}.html`;
      const response = await fetch(searchUrl);
      const htmlString = await response.text();
      const $ = cheerio.load(htmlString);
      const testArr = [];
      $(".gallery>.rubricItem").filter((i, item) => {
        const title = $(".link-title a", item).text();
        const text = $(".notice", item).text();
        const imgUrl = $(".rubricImage img", item).attr("src");
        const url = $(".link-title a", item).attr("href");

        return testArr.push({
          id: i + 1,
          title,
          text,
          imgUrl,
          url,
        });
      });
      return testArr;
    } catch (err) {
      console.log(err);
    }
  }
  const loadNextPage = async (page) => {
    const news = await loadGraphicCards(page);
    scrollRef.current.scrollTo({
      y: 0,
      animated: true,
    });
    setData({
      news,
      page,
    });
  };

  const filterData = data.news.filter((item) => {
    return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  });

  useEffect(() => {
    loadNextPage();
  }, []);

  return (
    <View style={styles.content}>
      <TextInput
        placeholder="Поиск"
        style={styles.input}
        onChangeText={(text) => setSearchValue(text)}
      />
      <View style={styles.newsWrapper}>
        <ScrollView style={styles.newsScroll} ref={scrollRef}>
          {filterData.length ? (
            filterData.map((item, index) => {
              return (
                <NewsBlock
                  {...item}
                  navigate={navigateToNewsInfo}
                  key={index}
                />
              );
            })
          ) : (
            <Text style={styles.emptyText}>Новостей не найдено!</Text>
          )}
          {filterData.length ? (
            <View style={styles.pagination}>
              {pages.map((item, index) => {
                return (
                  <Text
                    style={
                      data.page === index + 1
                        ? styles.paginationTextActive
                        : styles.paginationText
                    }
                    key={index}
                    onPress={() => loadNextPage(index + 1)}
                  >
                    {item}
                  </Text>
                );
              })}
            </View>
          ) : null}
        </ScrollView>
      </View>
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
  input: {
    width: Dimensions.get("window").width - 20,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    paddingVertical: 5,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  newsWrapper: {
    paddingBottom: 60,
  },
  newsScroll: {
    paddingHorizontal: 10,
    width: Dimensions.get("window").width,
  },
  emptyText: {
    textAlign: "center",
  },
  pagination: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  paginationText: {
    marginRight: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    color: "#c4c4c4",
    borderColor: "#c4c4c4",
  },
  paginationTextActive: {
    marginRight: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    color: "#507299",
    borderColor: "#507299",
  },
});

export default News;
