import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
// import * as GoogleSignIn from 'expo-google-sign-in';
// import * as AppleAuthentication from 'expo-apple-authentication';
import * as Google from "expo-auth-session/providers/google";
import { useState, useEffect } from "react";
import TransparentButton from "../components/transparent_button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";

// Функция для управления значением пользователя
// const manageUserValue = async (name='') => {
//   try {
//     // Попытка получить значение 'user' из хранилища
//     const existingUser = await AsyncStorage.getItem("user");

//     if (existingUser) {
//       // Если значение 'user' уже существует, загрузите его
//       console.log("Загружено значение пользователя:", existingUser);
//     } else {
//       // Если значение 'user' не существует, создайте его и присвойте имя
//       await AsyncStorage.setItem("user", name);
//       console.log("Значение пользователя создано и присвоено:", name);
//     }
//   } catch (error) {
//     console.error("Ошибка при управлении значением пользователя:", error);
//   }
// };

// Пример использования функции
// manageUserValue('John'); // Здесь 'John' - имя пользователя

const LoginScreen = () => {
  const navigation = useNavigation();
  // const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
  //   androidClientId:
  //     "106538246123-dqbptbjh024n9i2s31a19aqtpcaqgtvl.apps.googleusercontent.com",
  // });
  // const [data, setData] = useState();

  // const getUserInfo = async (token) => {
  //   const result = await fetch("https://www.googleapis.com/userinfo/v2/me", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   const result_1 = await result.json();
  //   setData(result_1);
  // };
  // const checkUser = async () => {
  //   const user = await AsyncStorage.getItem("user");
  //   console.log(user);
  //   if (user) {
  //       navigation.navigate('NewPhotoPrev')
  //   }
    
  // };
  // const saveUser = async () => {
  //   try {
  //       await AsyncStorage.setItem('user', `${data.email}|${data.name}|${data.picture}`)
  //       console.log(await AsyncStorage.getItem("user"))
  //       navigation.navigate('NewPhotoPrev')
  //   }
  //   catch {
  //       console.log("Произошла ошибка")
  //   }
  // }

  //   const manageUserValue = async (name='') => {
  //     try {
  //       // Попытка получить значение 'user' из хранилища
  //       const existingUser = await AsyncStorage.getItem("user");

  //       if (existingUser) {
  //         // Если значение 'user' уже существует, загрузите его
  //         console.log("Загружено значение пользователя:", existingUser);
  //       } else {
  //         // Если значение 'user' не существует, создайте его и присвойте имя
  //         await AsyncStorage.setItem("user", name);
  //         console.log("Значение пользователя создано и присвоено:", name);
  //       }
  //     } catch (error) {
  //       console.error("Ошибка при управлении значением пользователя:", error);
  //     }
  //   };

  // useEffect(() => {
  //   if (response) getUserInfo(response.authentication.accessToken);
  // }, [response]);
  // useEffect(() => {
  //   if (data) {
  //       saveUser()
  //   }
  // }, [data]);
  // useEffect(() => {
  //   checkUser();
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerDesciption}>Авторизация</Text>
      <TransparentButton
        text={"Google"}
        disabled={true}
        onPress={() => {
          // promptAsync();
        }}
        icon='<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            
            <title>Google-color</title>
            <desc>Created with Sketch.</desc>
            <defs>
        
        </defs>
            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                    <g id="Google" transform="translate(401.000000, 860.000000)">
                        <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05">
        
        </path>
                        <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335">
        
        </path>
                        <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853">
        
        </path>
                        <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4">
        
        </path>
                    </g>
                </g>
            </g>
        </svg>'
      />
      <TransparentButton
        text={"Я не хочу"}
        onPress={() => {
          navigation.navigate("NewPhotoPrev");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    gap: 20,
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
    fontFamily: "MontserratAlternates-Bold",
    fontSize: 26,
    color: "black",
    fontWeight: "normal",
    textAlign: "center",
  },
});

export default LoginScreen;
