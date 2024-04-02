import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

// Функция для sharing фото
const sharePhoto = async (photoUri) => {
  // Проверяем, доступна ли функция sharing
  const isAvailable = await Sharing.isAvailableAsync();
  if (!isAvailable) {
    alert("Sharing is not available on your platform");
    return;
  }

  // Проверяем, является ли URI файлом, который можно поделиться
  const fileInfo = await FileSystem.getInfoAsync(photoUri);
  if (!fileInfo.exists) {
    alert("File does not exist");
    return;
  }

  // Делаем sharing фото
  await Sharing.shareAsync(photoUri);
};
export default sharePhoto;

// Пример использования функции
// sharePhoto('file:///path/to/your/photo.jpg');
