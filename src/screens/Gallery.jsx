import React from "react";
import { View, Text, Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
function Gallery() {
  const images = [
    {
      url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
    },
    {},
  ];
  return (
    <Modal visible={false} transparent={true}>
      <ImageViewer imageUrls={images} />
    </Modal>
  );
}

export default Gallery;
