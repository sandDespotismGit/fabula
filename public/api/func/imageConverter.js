import {CameraRoll, Platform} from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob';
import {View, Text} from 'react-native';

// Modify the 'saveImage' function to use the browser's fetch API instead of 'node-fetch'


// export const saveBase64ImageToGallery = async (base64Image, setAlert) => {
//   try {
//     const imageWithoutHeader = base64Image.replace(
//       'data:image/png;base64,',
//       '',
//     );
//     const dirs = RNFetchBlob.fs.dirs;
//     const path = Platform.OS == 'android' ? dirs.DCIMDir + `/${String(Date.now())}.png` : dirs.PictureDir + `/${String(Date.now())}.png` ;

//     // if (Platform.OS === "android") {
//     //   // Check and request storage permissions if needed
//     //   // (You can implement the hasStoragePermissions function)
//     //   const hasPermission = await hasStoragePermissions();
//     //   if (!hasPermission) {
//     //     console.log("Permission denied. Cannot save image.");
//     //     return;
//     //   }
//     // }

//     await RNFetchBlob.fs.writeFile(path, imageWithoutHeader, 'base64');
//     console.log('Image saved successfully at path:', path);
//     setAlert(<View
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//       }}>
//       <Text
//         style={{
//           textAlign: 'center',
//           fontFamily: 'MontserratAlternates',
//           fontSize: 16,
//           color: 'green',
//         }}>
//         Saved successfully
//       </Text>
//     </View>);
//     setTimeout(() => {setAlert(null)}, 5000)
//   } catch (error) {
//     console.error('Error saving image:', error);
//     setAlert(
//       <View
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignContent: 'center',
//           alignItems: 'center',
//           width: '100%',
//         }}>
//         <Text
//           style={{
//             textAlign: 'center',
//             fontFamily: 'MontserratAlternates',
//             fontSize: 16,
//             color: 'red',
//           }}>
//           Error saving image
//         </Text>
//       </View>,
//     );
//     setTimeout(() => {setAlert(null)}, 5000)
//   }
// };

// Пример использования:

// Modify the 'toBase64' function to use the FileReader API instead of 'fs'
export function toBase64(imageUrl) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.onerror = function (error) {
      reject(error);
    };
    xhr.open('GET', imageUrl);
    xhr.responseType = 'blob';
    xhr.send();
  });
}
