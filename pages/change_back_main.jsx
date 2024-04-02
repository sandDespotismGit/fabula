import {
  View,
  Text,
  ImageBackground,
  Button,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { SvgXml } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import ImagePickerButton from "../components/button_image_picker";
import TransparentButton from "../components/transparent_button";
import PullUpStylesChangeBack from "../components/pullup_styles_change_back";
import { saveBase64ImageToGallery } from "../serverApis";
import { base64img2imgPostRequest } from "../serverApis";
import { base64img2imgPostRequestDepth } from "../serverApis";
import CyberSelect from "../components/cyber_select";
import AnimatedProgressBar from "../components/animated_progress_bar";
import { useRef } from "react";
import { getMask } from "../serverApis";
import { useStores } from "../store/store_context";
import { observer } from "mobx-react-lite";
const helper = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3625 11.25C11.6564 10.4146 12.2364 9.71013 12.9999 9.26141C13.7634 8.81269 14.6611 8.64867 15.534 8.79838C16.4068 8.9481 17.1985 9.4019 17.7688 10.0794C18.3392 10.7569 18.6513 11.6144 18.65 12.5C18.65 15 14.9 16.25 14.9 16.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21.25H15.0125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const NewPhotoMain = observer(({ navigation }) => {
  const [helperState, setHelper] = useState(false);
  const { depthChangeBack } = useStores();
  const [imageState, setImageState] = useState();
  const [resultText, setResultText] = useState(
    <Text style={styles.headerDesciption}>Здесь будет результат !</Text>
  );
  const [depthPrompt, setDepthPrompt] = useState("");
  const [alert, setAlert] = useState();
  const [style, setStyle] = useState(null);
  const [styleName, setStyleName] = useState("");
  const scrollRef = useRef(null);
  const [base64img, setBase64Img] = useState("");
  // useEffect(() => {
  //   txt2imgPostRequest({setImage: setImageState});
  // }, []);
  const sendRequestImg2Img = () => {
    if (depthChangeBack.base64Input != "" && style == null) {
      getMask(depthChangeBack.base64Input)
        .then((data) => data.json())
        .then((data) => {
          console.log(typeof(data))
          base64img2imgPostRequestDepth({
            init_image: depthChangeBack.base64Input,
            setImage: depthChangeBack.updateResult,
            mask: `${data}`,
          });
        });
    } else if (depthChangeBack.base64Input != "" && style != null) {
      getMask(depthChangeBack.base64Input)
        .then((data) => data.json())
        .then((data) => console.log(data))
        .then((response) => {
          base64img2imgPostRequestDepth({
            init_image: depthChangeBack.base64Input,
            setImage: depthChangeBack.updateResult,
            mask: String(data),
          });
        });
    }
  };
  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
        <View style={styles.headerEquals}></View>
        <View style={styles.headerTextEquals}>
          <Text style={styles.headerDesciption}>Заменить фон</Text>
        </View>
        <View style={styles.headerEquals}>
          <TouchableOpacity
            style={styles.helperButton}
            onPress={() => setHelper(!helperState)}
          >
            <SvgXml xml={helper} style={{ alignSelf: "flex-end" }} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.mainScroll} ref={scrollRef}>
        {helperState ? (
          <View style={styles.helperTextContainer}>
            <Text style={styles.helperText}>
              {" "}
              Тапните по области под этим текстом и выберите фотографию, которую
              хотите обработать
            </Text>
          </View>
        ) : null}
        <ImagePickerButton store={depthChangeBack} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            width: "100%",
            gap: 20,
            marginBottom: 20,
          }}
        >
          {helperState ? (
            <View style={styles.helperTextContainer}>
              <Text style={styles.helperText}>
                {" "}
                Тапните по форме ниже чтобы ввести промпт для замены фона
              </Text>
            </View>
          ) : null}
          <CyberSelect setDepth={setDepthPrompt} />
          <Text style={styles.headerDesciption}>
            Стиль: {styleName != "" ? styleName : "не выбран"}
          </Text>
        </View>
        {helperState ? (
          <View style={styles.helperTextContainer}>
            <Text style={styles.helperText}>
              {" "}
              После нажатия на кнопку отправить, в нижнем окошке появится
              надпись "Генерируем". Это значит что мы уже начали работу
            </Text>
          </View>
        ) : null}
        <View style={styles.buttonContainer}>
          <TransparentButton
            text={"Отправить"}
            onPress={() => {
              depthChangeBack.updateResult("");
              depthChangeBack.updateLoading(true);

              sendRequestImg2Img();
              scrollRef?.current.scrollTo({ y: 400 });
            }}
          />
        </View>

        <View style={styles.result}>
          <View style={styles.resultContainer}>
            {depthChangeBack.result ? (
              <Image
                source={{
                  uri: `data:image/png;base64,${depthChangeBack.result}`,
                }}
                style={styles.pickedImage}
              />
            ) : depthChangeBack.loading ? (
              <AnimatedProgressBar />
            ) : (
              <Text style={styles.headerDesciption}>
                Здесь будет результат !
              </Text>
            )}
          </View>
        </View>

        {/* <Image
          source={{
            uri: imageState,
          }}
          style={{height: 200, width: 250}}
        /> */}
        {helperState ? (
          <View style={styles.helperTextContainer}>
            <Text style={styles.helperText}>
              {" "}
              После нажатия на кнопку сохранить ваше фото появится в галерее !
            </Text>
          </View>
        ) : null}

        <View style={styles.buttonContainer}>
          <TransparentButton
            text={"Сохранить"}
            onPress={() => {
              saveBase64ImageToGallery(depthChangeBack.result, "Neuron");
            }}
          />
          {alert}
        </View>
        {helperState ? (
          <View style={styles.helperTextContainer}>
            <Text style={styles.helperText}>
              {" "}
              Здесь вы можете выбрать дополнительные настройки
            </Text>
          </View>
        ) : null}

        <PullUpStylesChangeBack
          setStyle={setStyle}
          setStyleName={setStyleName}
          scrollRef={scrollRef}
        />
      </ScrollView>
    </View>
  );
});
export default NewPhotoMain;
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
  },
  mainScroll: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: 20,
  },
  buttonContainer: {
    display: "flex",
    marginBottom: 20,
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
    borderRadius: 20,
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
    objectFit: "contain",
  },
  resultContainer: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: 300,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "black",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
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
  input: {
    width: "80%",
    color: "black",
    fontSize: 14,
    fontFamily: "MontserratAlternates",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  helperTextContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    alignContent: "flex-start",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 5,
    borderTopColor: "gray",
    borderTopWidth: 1,
    padding: 10,
  },
  helperText: {
    fontSize: 14,
    color: "gray",
    fontFamily: "MontserratAlternates",
    width: "80%",
    textAlign: "left",
  },
});
