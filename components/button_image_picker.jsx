// Импортируем необходимые компоненты из React, React Native и react-native-image-picker
import React, { useState, } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { observer } from "mobx-react-lite";

const ImagePickerButton = observer(({store}) => {


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      quality: 1,
      
    });

    if (!result.canceled) {
      store.updateInput(`${result.assets[0].base64}`);
    }
  };
  const handleImagePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity
        style={styles.imageInputOpacity}
        onPress={pickImage}
        onLongPress={() => handleImagePress()}
      >
        <View style={styles.imageInput}>
          {store.base64Input !== '' ? (
            <Image
              source={{ uri: `data:image/png;base64,${store.base64Input}` }}
              style={styles.pickedImage}
            />
          ) : (
            <Text style={styles.imageInputText}>Выберите фото</Text>
          )}
        </View>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          {store.base64Input !== "" ? (
            <Image
              source={{ uri: `data:image/png;base64,${store.base64Input}` }}
              style={styles.fullScreenImage}
            />
          ) : (
            <Text style={styles.imageInputText}>Выберите фото</Text>
          )}
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Закрыть</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
})

export default ImagePickerButton

// Создаем стили для компонента
const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
  },
  montserratThin: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
    height: "10%",
    gap: 20,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  headerText: {
    fontFamily: "MontserratAlternates-Bold",
    fontSize: 26,
    color: "black",
    fontWeight: "normal",
    textAlign: "center",
  },
  verticalFlex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  fullScreenImage: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
  },
  closeButtonText: {
    color: "black",
    fontSize: 18,
    fontFamily: "MontserratAlternates",
  },
  headerDesciption: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
    color: "black",
    fontWeight: "600",
    textAlign: "center",
  },
  helperButton: {
    width: "15%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  headerEquals: {
    display: "flex",
    flexDirection: "row",
    width: "15%",
  },
  headerTextEquals: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
    justifyContent: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    justifyContent: "space-between",
  },
  imageInputOpacity: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imageInput: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: 300,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "black",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  imageInputText: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
  pickedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    objectFit: "cover",
  },
});
