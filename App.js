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
import GalleryMain from "./pages/gallery_main";
import Settings from "./pages/settings";
import LoginScreen from "./pages/login";
import { LogBox } from "react-native";
import { useFonts } from "expo-font";
import { RootStoreContext } from "./store/store_context";
import RootStore from "./store/root_store";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontserratAlternates-Bold": require("./assets/fonts/MontserratAlternates-Bold.ttf"),
    MontserratAlternates: require("./assets/fonts/Montserrat-Medium.ttf"),
  });
  LogBox.ignoreAllLogs(true);
  return (
    <NavigationContainer>
      <RootStoreContext.Provider value={new RootStore()}>
        {fontsLoaded ? (
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="NewPhotoPrev" component={NewPhotoPrev} />
            <Stack.Screen name="NewPhotoMain" component={NewPhotoMain} />
            <Stack.Screen name="ChangeBackPrev" component={ChangeBackPrev} />
            <Stack.Screen name="ChangeBackMain" component={ChangeBackMain} />
            <Stack.Screen name="StylePhotoPrev" component={StylePhotoPrev} />
            <Stack.Screen name="StylePhotoMain" component={StylePhotoMain} />
            <Stack.Screen name="GalleryPrev" component={GalleryPrev} />
            <Stack.Screen name="GalleryMain" component={GalleryMain} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Navigator>
        ) : null}
      </RootStoreContext.Provider>
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
