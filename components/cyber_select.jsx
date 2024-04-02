import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import { useState } from "react";
import TransparentButton from "./transparent_button";
import depth_prompts from "../depth_prompts";

const CyberSelect = ({ setDepth }) => {
  const handleImagePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const [currentDepth, setCurrentDepth] = useState("Выберите фон");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TransparentButton
        text={currentDepth}
        onPress={() => handleImagePress()}
      />
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Закрыть</Text>
          </TouchableOpacity>
          <View style={styles.scrollContainer}>
            <ScrollView >
              {depth_prompts.map((elem, index) => (
                <TouchableOpacity
                  style={styles.touchDepth}
                  onPress={() => {
                    setDepth(elem.value);
                    setCurrentDepth(elem.label);
                    setModalVisible(false);
                  }}
                  key={index}
                >
                  <View style={styles.depthView}>
                    <Text style={styles.depthText}>{elem.label}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CyberSelect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  depthText: {
    fontFamily: 'MontserratAlternates',
    fontSize: 14,
    color: 'black',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  touchDepth: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  depthView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    marginBottom: 10,
    borderRadius: 22,
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 4,
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    display: "flex",
    flexDirection: "column",
  },
  scrollContainer: {
    display: "flex",
    flexDirection: "column",
    width: 300,
    height: "50%",
    position: "relative",
    top: 100,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
    borderTopColor: "black",
    borderTopStyle: "solid",
    borderTopWidth: 2,
    paddingTop: 10,
    paddingBottom: 4
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
    fontFamily: "MontserratAlternates-Bold",
    fontSize: 14,
    color: "black",
    fontWeight: "normal",
    textAlign: "center",
  },
});
