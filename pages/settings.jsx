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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import TransparentButton from "../components/transparent_button";
import { useNavigation } from "@react-navigation/native";
import ButtonArrows from "../components/button_black_arrows";
const Settings = ({ navigation }) => {
  const [data, setData] = useState();
  const navigationFrom = useNavigation();
  const getUserInfo = async () => {
    try {
      const info = await AsyncStorage.getItem("user");
      if (info != "") {
        setData(info.split("|"));
      }
    } catch {
      console.log("ошибка!");
    }
  };
  const quitUser = async () => {
    await AsyncStorage.removeItem("user");
    navigationFrom.navigate("LoginScreen");
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <View style={styles.main}>
      
      <View style={styles.headerContainer}>
        <View style={styles.headerEquals}></View>
        <View style={styles.headerTextEquals}>
          <Text style={styles.headerDesciptionNew}>Профиль</Text>
        </View>
        <View style={styles.headerEquals}></View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minHeight: "80%",
          alignContent: "center",
          alignItems: "center",
          paddingTop: 30,
          width: "100%",
        }}
      >
        
        <View style={styles.verticalFlex}>
          {data ? (
            <View style={styles.verticalFlex}>
              <View style={styles.circleMain}>
                <Image source={{ uri: data[2] }} style={styles.circleImage} />
              </View>
              <Text style={styles.headerDesciptionNewGray}>Здравствуйте,</Text>
              <Text style={styles.headerDesciptionNew}>{data[1]}</Text>
              <Text style={styles.headerDesciptionNew}>{data[0]}</Text>
              <TransparentButton
                text={"Выйти"}
                onPress={() => {
                  quitUser();
                }}
              />
            </View>
          ) : (
            <View style={styles.verticalFlex}>
              <Text style={styles.headerDesciptionNew}>
                Ой, кажется вы не авторизованы !
              </Text>
              <View>
                <ButtonArrows
                  strText={"Авторизоваться"}
                  strRoute={"LoginScreen"}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default Settings;
const styles = StyleSheet.create({
  circleImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 50,
  },
  circleMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 110,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 55,
  },
  headerDesciptionNewGray: {
    fontFamily: "MontserratAlternates-Bold",
    fontSize: 14,
    color: "gray",
    fontWeight: "600",
    textAlign: "center",
  },
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
  verticalFlexNew: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
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
    height: "90%",
    width: "100%",
  },
  headerDesciption: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
    color: "black",
    fontWeight: "600",
    textAlign: "center",
  },
  headerDesciptionNew: {
    fontFamily: "MontserratAlternates-Bold",
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
