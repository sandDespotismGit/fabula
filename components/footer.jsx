import {
  View,
  Text,
  ImageBackground,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

const addNew = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5556 4H6.44444C5.09441 4 4 5.09441 4 6.44444V23.5556C4 24.9056 5.09441 26 6.44444 26H23.5556C24.9056 26 26 24.9056 26 23.5556V6.44444C26 5.09441 24.9056 4 23.5556 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 10V20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const myImages = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21.875V8.4C3 6.86 3 6.09 3.29067 5.5015C3.54667 4.98313 3.95333 4.56375 4.456 4.29975C5.02667 4 5.77333 4 7.26667 4H22.7333C24.2267 4 24.9733 4 25.544 4.29975C26.0457 4.5634 26.4537 4.98408 26.7093 5.5015C27 6.08863 27 6.85862 27 8.39587V21.6041C27 22.271 27 22.7935 26.976 23.2184M3 21.875C3 23.2335 3.01733 23.9457 3.29067 24.4971C3.54667 25.0155 3.95333 25.4362 4.456 25.7002C5.02533 26 5.772 26 7.26267 26H22.7387C24.2293 26 24.9747 26 25.544 25.7002C26.0453 25.4362 26.4533 25.0155 26.7093 24.4971C26.8733 24.1644 26.9453 23.7739 26.976 23.2184M3 21.875L9.35733 14.2272L9.35867 14.2245C9.92267 13.5466 10.2053 13.207 10.54 13.0833C10.8341 12.9759 11.1554 12.9783 11.448 13.0901C11.7813 13.218 12.0613 13.5618 12.616 14.2493L16.1773 18.6561C16.692 19.2941 16.9507 19.6131 17.2653 19.7424C17.5424 19.8548 17.8479 19.8683 18.1333 19.7809C18.4587 19.6819 18.7467 19.3862 19.3187 18.7964L19.9813 18.113C20.564 17.5107 20.856 17.211 21.1867 17.112C21.4766 17.0254 21.7866 17.0433 22.0653 17.1629C22.3827 17.299 22.64 17.6304 23.156 18.2931L26.976 23.2184M26.976 23.2184L27 23.25M19 12.25C18.6464 12.25 18.3072 12.1051 18.0572 11.8473C17.8071 11.5894 17.6667 11.2397 17.6667 10.875C17.6667 10.5103 17.8071 10.1606 18.0572 9.90273C18.3072 9.64487 18.6464 9.5 19 9.5C19.3536 9.5 19.6928 9.64487 19.9428 9.90273C20.1929 10.1606 20.3333 10.5103 20.3333 10.875C20.3333 11.2397 20.1929 11.5894 19.9428 11.8473C19.6928 12.1051 19.3536 12.25 19 12.25Z" stroke="black" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const camera = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 23.4444C27 24.1222 26.7701 24.7722 26.361 25.2515C25.9518 25.7308 25.3968 26 24.8182 26H5.18182C4.60316 26 4.04821 25.7308 3.63904 25.2515C3.22987 24.7722 3 24.1222 3 23.4444V9.38889C3 8.71111 3.22987 8.0611 3.63904 7.58184C4.04821 7.10258 4.60316 6.83333 5.18182 6.83333H9.54545L11.7273 3H18.2727L20.4545 6.83333H24.8182C25.3968 6.83333 25.9518 7.10258 26.361 7.58184C26.7701 8.0611 27 8.71111 27 9.38889V23.4444Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21C17.7614 21 20 18.7614 20 16C20 13.2386 17.7614 11 15 11C12.2386 11 10 13.2386 10 16C10 18.7614 12.2386 21 15 21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const film = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.602 4H6.398C5.07362 4 4 5.07362 4 6.398V23.602C4 24.9264 5.07362 26 6.398 26H23.602C24.9264 26 26 24.9264 26 23.602V6.398C26 5.07362 24.9264 4 23.602 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 4V26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 4V26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 15H26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 10H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 21H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 21H26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 10H26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const settings = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18.75C17.0711 18.75 18.75 17.0711 18.75 15C18.75 12.9289 17.0711 11.25 15 11.25C12.9289 11.25 11.25 12.9289 11.25 15C11.25 17.0711 12.9289 18.75 15 18.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.0727 18.2727C22.9275 18.6018 22.8842 18.9668 22.9484 19.3206C23.0125 19.6745 23.1812 20.0011 23.4327 20.2582L23.4982 20.3236C23.701 20.5263 23.862 20.7669 23.9718 21.0318C24.0816 21.2966 24.1381 21.5805 24.1381 21.8673C24.1381 22.154 24.0816 22.4379 23.9718 22.7028C23.862 22.9676 23.701 23.2083 23.4982 23.4109C23.2956 23.6138 23.0549 23.7747 22.7901 23.8845C22.5252 23.9943 22.2413 24.0508 21.9545 24.0508C21.6678 24.0508 21.3839 23.9943 21.119 23.8845C20.8542 23.7747 20.6135 23.6138 20.4109 23.4109L20.3455 23.3455C20.0884 23.094 19.7618 22.9253 19.4079 22.8611C19.054 22.7969 18.689 22.8402 18.36 22.9855C18.0373 23.1237 17.7622 23.3534 17.5683 23.646C17.3745 23.9387 17.2705 24.2817 17.2691 24.6327V24.8182C17.2691 25.3968 17.0392 25.9518 16.6301 26.361C16.2209 26.7701 15.6659 27 15.0873 27C14.5086 27 13.9537 26.7701 13.5445 26.361C13.1353 25.9518 12.9055 25.3968 12.9055 24.8182V24.72C12.897 24.3589 12.7801 24.0087 12.57 23.7149C12.3599 23.4212 12.0663 23.1974 11.7273 23.0727C11.3982 22.9275 11.0332 22.8842 10.6794 22.9484C10.3255 23.0125 9.99892 23.1812 9.74182 23.4327L9.67636 23.4982C9.47373 23.701 9.2331 23.862 8.96823 23.9718C8.70336 24.0816 8.41945 24.1381 8.13273 24.1381C7.846 24.1381 7.56209 24.0816 7.29722 23.9718C7.03235 23.862 6.79172 23.701 6.58909 23.4982C6.38623 23.2956 6.2253 23.0549 6.11551 22.7901C6.00571 22.5252 5.94919 22.2413 5.94919 21.9545C5.94919 21.6678 6.00571 21.3839 6.11551 21.119C6.2253 20.8542 6.38623 20.6135 6.58909 20.4109L6.65455 20.3455C6.90604 20.0884 7.07475 19.7618 7.13891 19.4079C7.20308 19.054 7.15976 18.689 7.01455 18.36C6.87626 18.0373 6.64664 17.7622 6.35396 17.5683C6.06128 17.3745 5.71831 17.2705 5.36727 17.2691H5.18182C4.60316 17.2691 4.04821 17.0392 3.63904 16.6301C3.22987 16.2209 3 15.6659 3 15.0873C3 14.5086 3.22987 13.9537 3.63904 13.5445C4.04821 13.1353 4.60316 12.9055 5.18182 12.9055H5.28C5.64108 12.897 5.99128 12.7801 6.28505 12.57C6.57883 12.3599 6.8026 12.0663 6.92727 11.7273C7.07249 11.3982 7.11581 11.0332 7.05164 10.6794C6.98748 10.3255 6.81877 9.99892 6.56727 9.74182L6.50182 9.67636C6.29896 9.47373 6.13803 9.2331 6.02823 8.96823C5.91843 8.70336 5.86192 8.41945 5.86192 8.13273C5.86192 7.846 5.91843 7.56209 6.02823 7.29722C6.13803 7.03235 6.29896 6.79172 6.50182 6.58909C6.70445 6.38623 6.94508 6.2253 7.20995 6.11551C7.47482 6.00571 7.75873 5.94919 8.04545 5.94919C8.33218 5.94919 8.61609 6.00571 8.88096 6.11551C9.14583 6.2253 9.38646 6.38623 9.58909 6.58909L9.65455 6.65455C9.91165 6.90604 10.2382 7.07475 10.5921 7.13891C10.946 7.20308 11.311 7.15976 11.64 7.01455H11.7273C12.0499 6.87626 12.3251 6.64664 12.5189 6.35396C12.7128 6.06128 12.8168 5.71831 12.8182 5.36727V5.18182C12.8182 4.60316 13.0481 4.04821 13.4572 3.63904C13.8664 3.22987 14.4213 3 15 3C15.5787 3 16.1336 3.22987 16.5428 3.63904C16.9519 4.04821 17.1818 4.60316 17.1818 5.18182V5.28C17.1832 5.63104 17.2872 5.97401 17.4811 6.26669C17.6749 6.55937 17.9501 6.78899 18.2727 6.92727C18.6018 7.07249 18.9668 7.11581 19.3206 7.05164C19.6745 6.98748 20.0011 6.81877 20.2582 6.56727L20.3236 6.50182C20.5263 6.29896 20.7669 6.13803 21.0318 6.02823C21.2966 5.91843 21.5805 5.86192 21.8673 5.86192C22.154 5.86192 22.4379 5.91843 22.7028 6.02823C22.9676 6.13803 23.2083 6.29896 23.4109 6.50182C23.6138 6.70445 23.7747 6.94508 23.8845 7.20995C23.9943 7.47482 24.0508 7.75873 24.0508 8.04545C24.0508 8.33218 23.9943 8.61609 23.8845 8.88096C23.7747 9.14583 23.6138 9.38646 23.4109 9.58909L23.3455 9.65455C23.094 9.91165 22.9253 10.2382 22.8611 10.5921C22.7969 10.946 22.8402 11.311 22.9855 11.64V11.7273C23.1237 12.0499 23.3534 12.3251 23.646 12.5189C23.9387 12.7128 24.2817 12.8168 24.6327 12.8182H24.8182C25.3968 12.8182 25.9518 13.0481 26.361 13.4572C26.7701 13.8664 27 14.4213 27 15C27 15.5787 26.7701 16.1336 26.361 16.5428C25.9518 16.9519 25.3968 17.1818 24.8182 17.1818H24.72C24.369 17.1832 24.026 17.2872 23.7333 17.4811C23.4406 17.6749 23.211 17.9501 23.0727 18.2727Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const Footer = () => {
  const navigation = useNavigation();
  const [current, setCurrent] = useState([false, false, false, false, false]);
  const handleMenuClick = (index) => {
    let buffer = Array.from(current);
    buffer = buffer.map((elem) => false);
    buffer[index] = true;
    setCurrent(buffer);
  };

  return (
    <View style={styles.mainBlock}>
      <TouchableOpacity
        onPress={() => {navigation.navigate("NewPhotoPrev"); handleMenuClick(0)}}
        style={styles.icon}
      >
        <View style={current[0] ? styles.currentView : styles.plain}>
          <SvgXml xml={addNew} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {navigation.navigate("ChangeBackPrev"); handleMenuClick(1)}}
        style={styles.icon}
      >
        <View style={current[1] ? styles.currentView : styles.plain}>
          <SvgXml xml={myImages} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {navigation.navigate("StylePhotoPrev"); handleMenuClick(2)}}
        style={styles.icon}
      >
        <View style={current[2] ? styles.currentView : styles.plain}>
          <SvgXml xml={camera} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {navigation.navigate("GalleryPrev"); handleMenuClick(3)}}
        style={styles.icon}
      >
        <View style={current[3] ? styles.currentView : styles.plain}>
          <SvgXml xml={film} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {navigation.navigate("Settings"); handleMenuClick(4)}}
        style={styles.icon}
      >
        <View style={current[4] ? styles.currentView : styles.plain}>
          <SvgXml xml={settings} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  mainBlock: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "10%",
    borderTopColor: "black",
    borderTopStyle: "solid",
    borderTopWidth: 2,
    backgroundColor: "white",
  },
  icon: {
    width: "20%",
    height: "100%",
    resizeMode: "cover",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  currentView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    padding: 5,
    borderRadius: 50,
    width:40,
    height:40
  },
  plainView:{
    width:40,
    height:40
  }
});
