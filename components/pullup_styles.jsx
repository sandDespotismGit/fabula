import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { getAllFirst } from "../serverApis";
import { getAllSecond } from "../serverApis";
import { SvgXml } from "react-native-svg";
import AnimatedProgressBar from "./animated_progress_bar";
const checked = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 9L9.99998 16L6.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
// функция, которая рендерит компонент
const PullUpStyles = ({ setStyle, scrollRef, setStyleName }) => {
  const fetchData = async () => {
    try {
      const result = await getAllFirst();
      if (result) {
        let first = [];
        let second = [];
        for (let elem of result) {
          if (elem.class == "Class style 1 2")
            first.push(
              <TouchableOpacity
                onPress={() => {
                  setStyle(JSON.parse(elem.data));
                  setStyleName(elem.name);
                  console.log(JSON.parse(elem.data));
                  scrollRef?.current.scrollTo({ y: 100 });
                }}
              >
                <View style={styles.blockStyle}>
                  <Image
                    source={{
                      uri: `http://176.222.55.165:7000/image/${elem.image}`,
                    }}
                    style={styles.leftSide}
                  />
                  <View style={styles.rightSide}>
                    <Text style={styles.blockStyleTextSmall}>{elem.name}</Text>
                    <Text style={styles.blockStyleText}>
                      {elem.description}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          else if (elem.class == "Class style 1 3")
            second.push(
              <TouchableOpacity
                onPress={() => {
                  setStyle(JSON.parse(elem.data));
                  setStyleName(elem.name);
                  scrollRef?.current.scrollTo({ y: 100 });
                }}
              >
                <View style={styles.blockStyle}>
                  <Image
                    source={{
                      uri: `http://176.222.55.165:7000/image/${elem.image}`,
                    }}
                    style={styles.leftSide}
                  />
                  <View style={styles.rightSide}>
                    <Text style={styles.blockStyleTextSmall}>{elem.name}</Text>
                    <Text style={styles.blockStyleText}>
                      {elem.description}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
        }
        setHudozka(first);
        setProfessional(second);

        console.log(result);
      } else {
        console.log("Произошла ошибка при выполнении запроса.");
      }
    } catch (error) {
      console.log("Error fetching data:");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [hudozka, setHudozka] = useState(<AnimatedProgressBar />);
  const [professional, setProfessional] = useState(<AnimatedProgressBar />);
  const [promptsState, setPromptsState] = useState(0);
  return (
    <View style={styles.main}>
      <View style={styles.headerTop}>
        <TouchableOpacity
          onPress={() => setPromptsState(0)}
          style={styles.touchSelect}
        >
          <Text style={styles.imageInputText}>Художественные</Text>
          {promptsState == 0 ? (
            <SvgXml xml={checked} height={20} width={20} />
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPromptsState(1)}
          style={styles.touchSelect}
        >
          <Text style={styles.imageInputText}>Профессиональные</Text>
          {promptsState == 1 ? (
            <SvgXml xml={checked} height={20} width={20} />
          ) : null}
        </TouchableOpacity>
      </View>
      {promptsState == 0 ? (
        <View style={styles.mainBlocks}>{hudozka}</View>
      ) : (
        <View style={styles.mainBlocks}>{professional}</View>
      )}
      <StatusBar />
    </View>
  );
};
export default PullUpStyles;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchSelect: {
    display: "flex",
    flexDirection: "row",
  },
  leftSide: {
    display: "flex",
    width: "50%",
    height: "100%",
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    padding: 5,
  },
  rightSide: {
    display: "flex",
    width: "50%",
    height: "100%",
    flexDirection: "column",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    alignContent: "flex-start",
    alignItems: "flex-start",
    gap: 5,
  },
  mainBlocks: {
    display: "flex",
    flexDirection: "column",
    padding: 15,
    gap: 15,
  },
  blockStyle: {
    display: "flex",
    flexDirection: "row",
    minHeight: 150,
    maxHeight: 250,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    minHeight: 300,
    width: "100%",
    justifyContent: "flex-start",
  },
  headerTop: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    gap: 10,
    justifyContent: "space-between",
  },
  montserratThin: {
    fontFamily: "MontserratAlternates-Thin",
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
    width: "80%",
    height: 200,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  imageInputText: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
    fontWeight: "600",
    color: "black",
    textDecorationLine: "underline",
  },
  blockStyleText: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
  blockStyleTextSmall: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
    fontWeight: "600",
    color: "black",
    textAlign: "left",
  },
  mainScroll: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    textAlign: "left",
  },
});
