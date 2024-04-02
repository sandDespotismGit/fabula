import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

// export const saveBase64ToGallery = async (base64Image) => {
//   try {
//     // Создаем временный файл с расширением .png
//     const fileUri = FileSystem.cacheDirectory + 'tempImage.png';

//     // Записываем base64 данные в файл
//     await FileSystem.writeAsStringAsync(fileUri, base64Image, {
//       encoding: FileSystem.EncodingType.Base64,
//     });

//     // Сохраняем файл в галерее
//     const asset = await MediaLibrary.createAssetAsync(fileUri);

//     // Добавляем файл в галерею
//     await MediaLibrary.createAlbumAsync('MyAlbum', asset, false);

//     console.log('Изображение успешно сохранено в галерее');
//   } catch (error) {
//     console.error('Произошла ошибка при сохранении изображения:', error);
//   }
// };

// Пример использования
// const base64Image = '...'; // Замените на ваш base64 код изображения
// saveBase64ToGallery(base64Image);

export const saveBase64ImageToGallery = async (base64Image, albumName='Neuron') => {
  try {
    // Проверяем разрешение на доступ к галерее
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access media library was denied');
      return;
    }

    // Создаем альбом, если он не существует
    let album = await MediaLibrary.getAlbumAsync(albumName);
    if (!album) {
      album = await MediaLibrary.createAlbumAsync(albumName);
    }

    // Создаем временный файл с расширением .png
    const fileUri = FileSystem.cacheDirectory + 'tempImage.png';

    // Записываем base64 данные в файл
    await FileSystem.writeAsStringAsync(fileUri, base64Image, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // Сохраняем файл в галерее в указанном альбоме
    const asset = await MediaLibrary.createAssetAsync(fileUri);
    await MediaLibrary.addAssetsToAlbumAsync([asset], album.id, false);

    console.log('Изображение успешно сохранено в галерее в альбоме', albumName);
  } catch (error) {
    console.error('Произошла ошибка при сохранении изображения:', error);
  }
};

export const getFirstAll = async () => {
  let response = await fetch('http://176.222.55.165:7000/allFirstStyles', {method: 'GET'})
  let result = response.json()
  return result 
    
};

export const getSecondAll = async () => {
  let response = await fetch('http://176.222.55.165:7000/allSecondStyles', {method: 'GET'})
  let result = response.json()
  return result
};

export const getThirdAll = async () => {
  let response = await fetch('http://176.222.55.165:7000/allThirdStyles', {method: 'GET'})
  let result = response.json()
  return result
};

export const getFirstId = id => {
  fetch(`http://176.222.55.165:7000/first/:${id}`, {method: 'GET'})
    .then(response => response.json())
    .then(data => console.log(data));
};

export const getSecondId = id => {
  fetch(`http://176.222.55.165:7000/second/:${id}`, {method: 'GET'})
    .then(response => response.json())
    .then(data => console.log(data));
};
export const getThirdId = id => {
  fetch(`http://176.222.55.165:7000/third/:${id}`, {method: 'GET'})
    .then(response => response.json())
    .then(data => console.log(data));
};

