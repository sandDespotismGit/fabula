import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Footer from "./components/footer";
import NewPhotoPrev from "./pages/new_photo_preview";
import ChangeBackPrev from "./pages/cnahge_back_prev";
import StylePhotoPrev from "./pages/style_photo_prev";
import GalleryPrev from "./pages/gallery_prev";
import NewPhotoMain from "./pages/new_photo_main";
import ChangeBackMain from "./pages/change_back_main";
import StylePhotoMain from "./pages/style_photo_main";
import Settings from "./pages/settings";
import { useFonts } from "expo-font";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontserratAlternates-Bold": require("./assets/fonts/MontserratAlternates-Bold.ttf"),
    "MontserratAlternates": require("./assets/fonts/Montserrat-Medium.ttf"),
  });
  return (
    
    <NavigationContainer>
      {fontsLoaded ?
      <Stack.Navigator
        initialRouteName="newPhotoPrev"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="NewPhotoPrev" component={NewPhotoPrev} />
        <Stack.Screen name="NewPhotoMain" component={NewPhotoMain} />
        <Stack.Screen name="ChangeBackPrev" component={ChangeBackPrev} />
        <Stack.Screen name="ChangeBackMain" component={ChangeBackMain} />
        <Stack.Screen name="StylePhotoPrev" component={StylePhotoPrev} />
        <Stack.Screen name="StylePhotoMain" component={StylePhotoMain} />
        <Stack.Screen name='GalleryPrev' component={GalleryPrev}/>
            {/* <Stack.Screen name='GalleryMain' component={GalleryMain}/> */}
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator> : null}
      <Footer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
