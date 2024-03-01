// import {View, Text, ImageBackground, Button, ScrollView} from 'react-native';
// import {StyleSheet} from 'react-native';
// import Footer from './../components/footer';
// import {useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import ButtonArrows from '../components/button_black_arrows';
// const GalleryPrev = ({navigation}) => {
//   const [meow, setMeow] = useState(1);
//   return (
//     <View style={styles.main}>
//         <View style={styles.headerContainer}>
//           <View style={styles.verticalFlex}>
//             <Text style={styles.headerText}>
//               Галерея, созданных вами шедевров
//             </Text>
//             <Text style={styles.headerDesciption}>
//               Насладитесь ностальгией и отправьтесь в прошлое, листая
//               воспоминания
//             </Text>
//           </View>
//           <ButtonArrows strRoute={'GalleryMain'} strText={'Давайте!'} />
//         </View>
//     </View>
//   );
// };
// export default GalleryPrev;
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'lavender',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   main: {
//     display: 'flex',
//     flexDirection: 'column',
//     margin: '20px',
//     backgroundColor: 'white',
//     height: '100%',
//     width: '100%',
//     justifyContent: 'space-between',
//   },
//   montserratThin: {
//     fontFamily: 'MontserratAlternates-Thin',
//     fontSize: 16,
//   },
//   headerContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 30,
//     height: '100%',
//     gap: 20,
//   },
//   headerText: {
//     fontFamily: 'MontserratAlternates-Bold',
//     fontSize: 26,
//     color: 'black',
//     fontWeight: 'normal',
//     textAlign: 'center',
//   },
//   verticalFlex: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 20,
//   },
//   headerDesciption: {
//     fontFamily: 'MontserratAlternates-Bold',
//     fontSize: 16,
//     color: 'black',
//     fontWeight: 'normal',
//     textAlign: 'center',
//   },
//   backImage: {
//     alignContent: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';

const GalleryPrev = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Путь к папке с изображениями на устройстве
    const imageFolder = FileSystem.documentDirectory;

    // Загрузка всех изображений из папки
    const loadImages = async () => {
      try {
        const imageNames = await FileSystem.readDirectoryAsync(imageFolder);
        setImages(imageNames);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, []);

  return (
    <View style={styles.container}>
      {images.map((imageName, index) => (
        <Image
          key={index}
          source={{ uri: `${imageFolder}${imageName}` }}
          style={styles.image}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    resizeMode: 'cover',
  },
});

export default GalleryPrev;
