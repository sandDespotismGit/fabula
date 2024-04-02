import React, { useState } from "react";
import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import * as FileSystem from "expo-file-system";
import { img43 } from "../assets/keypoints/base64keypoints";
import { img43v2 } from "../assets/keypoints/base64keypoints";
import { img43v3 } from "../assets/keypoints/base64keypoints";
import { img34 } from "../assets/keypoints/base64keypoints";
import { img34v2 } from "../assets/keypoints/base64keypoints";
import { img169 } from "../assets/keypoints/base64keypoints";
import { img169v2 } from "../assets/keypoints/base64keypoints";
import { img169v3 } from "../assets/keypoints/base64keypoints";
import { img916 } from "../assets/keypoints/base64keypoints";
import { img916v2 } from "../assets/keypoints/base64keypoints";
import { img916v3 } from "../assets/keypoints/base64keypoints";
import { observer } from "mobx-react-lite";

const images = [
  img43,
  img43v2,
  img43v3,
  img34,
  img34v2,
  img169,
  img169v2,
  img169v3,
  img916,
  img916v2,
  img916v3,
  // Добавьте пути к другим фотографиям
];

const KeyPoints = observer(({ setSelectedImageBase64 }) => {
  const convertToBase64 = async (image) => {
    setSelectedImageBase64(image);
  };

  return (
    <ScrollView
      horizontal={true}
      style={{ flexDirection: "row" }}
      showsHorizontalScrollIndicator={false}
    >
      {images.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => convertToBase64(image)}>
          <Image
            source={{ uri: `data:image/png;base64,${image}` }}
            style={{
              width: 100,
              height: 100,
              margin: 10,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
});

export default KeyPoints;
