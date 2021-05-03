import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Modal } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import ImageViewer from "react-native-image-zoom-viewer";

import { sportGallery } from "../../public/sportGallery";

function Sport() {
  const [modal, setModal] = useState(false);

  const handlerToggleModal = () => {
    setModal(!modal);
  };

  const handlerCloseModal = () => {
    setModal(false);
  };

  return (
    <View style={styles.content}>
      <View style={styles.contentTop}>
        <Text style={styles.contentTopText}>
          Раписание занятий секций ШСК “Чемпион” в 2020-2021 учебном году
        </Text>
        <Image
          source={require("../img/chartSport.png")}
          resizeMode="contain"
          style={styles.contentTopImage}
        />
      </View>

      <View style={styles.photoWrapper}>
        <Text style={{ marginBottom: 20, fontSize: 16 }}>Фотогалерея</Text>
        <Image source={require("../img/box.jpg")} style={styles.photoImage} />
        <MaterialIcons
          name="photo-library"
          size={24}
          color="#fff"
          style={styles.photoButton}
          onPress={handlerToggleModal}
        />
      </View>
      <Modal transparent visible={modal} style={styles.modal}>
        <ImageViewer imageUrls={sportGallery} style={styles.modalImageViewer} />
        <MaterialCommunityIcons
          name="close"
          size={30}
          color="#fff"
          onPress={handlerCloseModal}
          style={styles.modalButton}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  contentTop: {
    alignItems: "center",
  },
  contentTopText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  contentTopImage: {
    width: 300,
    height: 150,
    borderRadius: 8,
    borderWidth: 1,
  },
  photoWrapper: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: 20,
  },
  photoImage: {
    width: 300,
    height: 200,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  photoButton: {
    position: "absolute",
    bottom: 20,
    right: 40,
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 1,
    borderColor: "#fff",
  },
  modalImageViewer: {
    backgroundColor: "#000",
  },
  modalButton: {
    position: "absolute",
    top: 20,
    right: 10,
  },
});

export default Sport;
