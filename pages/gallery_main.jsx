// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Image,
//   Button,
//   FlatList,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import { Platform } from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob';

// const GalleryMain = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetchImagesFromGallery();
//   }, []);

//   const fetchImagesFromGallery = async () => {
//     try {
//       const response = await RNFetchBlob.fs.ls(Platform.OS == 'android' ? RNFetchBlob.fs.dirs.DCIMDir : RNFetchBlob.fs.dirs.PictureDir); // Измените путь на соответствующий путь к вашим изображениям
//       const imagePaths = response.map(
//         imageName => `file:///storage/emulated/0/DCIM/${imageName}`, // Измените путь на соответствующий путь к вашим изображениям
//       );
//       setImages(imagePaths);
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   return (
//     <View
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignContent: 'center',
//         alignItems: 'center',
//         width:'100%'
//       }}>
//       <View style={styles.container}>
//         <FlatList
//           data={images}
//           keyExtractor={item => item}
//           renderItem={({item}) => (
//             <Image source={{uri: item}} style={styles.image} />
//           )}
//           numColumns={3}
//           style={{display:'flex', alignSelf:'center', width:'100%'}}
          
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     alignContent: 'center',
//     alignSelf: 'center',
//   },
//   image: {
//     width: "30.5%" ,
//     height: 200,
//     margin: 5,
//   },
// });

// export default GalleryMain;
