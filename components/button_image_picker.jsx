// Импортируем необходимые компоненты из React, React Native и react-native-image-picker
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerButton() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const [imageState, setImageState] = useState();

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.imageInputOpacity} onPress={pickImage}>
        <View style={styles.imageInput}>
          {image ? (
            <Image
              source={{uri: image}}
              style={styles.pickedImage}
            />
          ) : <Text style={styles.imageInputText}>Выберите фото</Text>}
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Создаем стили для компонента
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
  },
  montserratThin: {
    fontFamily: 'MontserratAlternates',
    fontSize: 16,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
    height: '10%',
    gap: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  headerText: {
    fontFamily: 'MontserratAlternates-Bold',
    fontSize: 26,
    color: 'black',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  verticalFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  headerDesciption: {
    fontFamily: 'MontserratAlternates',
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
  },
  helperButton: {
    width: '15%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  headerEquals: {
    display: 'flex',
    flexDirection: 'row',
    width: '15%',
  },
  headerTextEquals: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'space-between',
  },
  imageInputOpacity: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageInput: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    height: 300,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: 'black',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  imageInputText: {
    fontFamily: 'MontserratAlternates',
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  pickedImage: {
    width: '100%',
    height: '100%',
    borderRadius:20,
    objectFit:'cover'
  },
});

