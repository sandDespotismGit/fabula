import {
  View,
  Text,
  ImageBackground,
  Button,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import {StyleSheet} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';
import {SvgXml} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import ImagePickerButton from '../components/button_image_picker';
import TransparentButton from '../components/transparent_button';
import PullupStylesStylePhoto from '../components/pullup_styles.style_photo';
import txt2imgPostRequest from '../public/api/func/txt2img';
import {img2imgPostRequest} from '../public/api/func/img2img';
import {saveBase64ImageToGallery} from '../public/api/func/imageConverter';
const helper = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3625 11.25C11.6564 10.4146 12.2364 9.71013 12.9999 9.26141C13.7634 8.81269 14.6611 8.64867 15.534 8.79838C16.4068 8.9481 17.1985 9.4019 17.7688 10.0794C18.3392 10.7569 18.6513 11.6144 18.65 12.5C18.65 15 14.9 16.25 14.9 16.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21.25H15.0125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const NewPhotoMain = ({navigation}) => {
  const [helperState, setHelper] = useState(false);
  const [imageState, setImageState] = useState();
  const [resultText, setResultText] = useState('Здесь будет результат !');
  const [alert, setAlert] = useState(null)

  // useEffect(() => {
  //   txt2imgPostRequest({setImage: setImageState});
  // }, []);
  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
        <View style={styles.headerEquals}></View>
        <View style={styles.headerTextEquals}>
          <Text style={styles.headerDesciption}>Дайте волю фантазии !</Text>
        </View>
        <View style={styles.headerEquals}>
          <TouchableOpacity
            style={styles.helperButton}
            onPress={() => setHelper(!helperState)}>
            <SvgXml xml={helper} style={{alignSelf: 'flex-end'}} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.mainScroll}>
        {helperState ? (
          <View style={styles.helperTextContainer}>
            <Text style={styles.helperText}>
              {' '}
              Тапните по области под этим текстом и выберите фотографию, которую
              хотите обработать
            </Text>
          </View>
        ) : null}
        <ImagePickerButton />
        <View style={styles.buttonContainer}>
          <TransparentButton
            text={'Отправить'}
            onPress={() => {
              setImageState();
              setResultText('Генерируем...');
              txt2imgPostRequest({setImage: setImageState});
            }}
          />
        </View>
        {helperState ? (
          <View style={styles.helperTextContainer}>
            <Text style={styles.helperText}>
              {' '}
              После нажатия на кнопку отправить, в нижнем окошке появится надпись "Генерируем". Это значит что мы уже начали работу
            </Text>
          </View>
        ) : null}

        <View style={styles.result}>
          <View style={styles.resultContainer}>
            {imageState ? (
              <Image source={{uri: imageState}} style={styles.pickedImage} />
            ) : (
              <Text style={styles.imageInputText}>{resultText}</Text>
            )}
          </View>
        </View>

        {/* <Image
          source={{
            uri: imageState,
          }}
          style={{height: 200, width: 250}}
        /> */}
        {helperState ? (
          <View style={styles.helperTextContainer}>
            <Text style={styles.helperText}>
              {' '}
              После нажатия на кнопку сохранить ваше фото появится в галерее !
            </Text>
          </View>
        ) : null}

        <View style={styles.buttonContainer}>
          <TransparentButton
            text={'Сохранить'}
            onPress={() => {
              saveBase64ImageToGallery(imageState, setAlert);
            }}
          />
          {alert}
        </View>
        {helperState ? (
          <View style={styles.helperTextContainer}>
            <Text style={styles.helperText}>
              {' '}
              Здесь вы можете выбрать дополнительные настройки
            </Text>
          </View>
        ) : null}

        <PullupStylesStylePhoto />
      </ScrollView>
    </View>
  );
};
export default NewPhotoMain;
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
    fontFamily: 'MontserratAlternates-Thin',
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
    width: '80%',
    height: 200,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  imageInputText: {
    fontFamily: 'MontserratAlternates',
    fontSize: 16,
    fontWeight: '600',
  },
  mainScroll: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: 20,
  },
  buttonContainer: {
    display: 'flex',
    marginBottom: 20,
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
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: 20,
    objectFit: 'contain',
  },
  resultContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    height: 300,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: 'black',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
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
    borderRadius: 20,
    objectFit: 'cover',
  },
  input: {
    width: '80%',
    color: 'black',
    fontSize: 16,
    fontFamily: 'MontserratAlternates',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  helperTextContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    borderBottomColor:'gray',
    borderBottomWidth:1,
    marginBottom:10,
    marginTop:5,
    borderTopColor:'gray',
    borderTopWidth:1,
    padding:10
  },
  helperText: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'MontserratAlternates',
    width: '80%',
    textAlign: 'left',
  },
});
