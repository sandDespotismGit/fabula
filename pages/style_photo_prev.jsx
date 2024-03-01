import {View, Text, ImageBackground, Button, ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import Footer from './../components/footer';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ButtonArrows from '../components/button_black_arrows';
const StylePhotoPrev = ({navigation}) => {
  const [meow, setMeow] = useState(1);
  return (
    <View style={styles.main}>
        <View style={styles.headerContainer}>
          <View style={styles.verticalFlex}>
            <Text style={styles.headerText}>Обработать фотографию в стиле</Text>
            <Text style={styles.headerDesciption}>
              Здесь вы можете перенести вашу фотографию в мир любой киновселенной или мультфильма 
            </Text>
          </View>
          <ButtonArrows strRoute={'StylePhotoMain'} strText={'Хорошо!'}/>
        </View>
    </View>
  );
};
export default StylePhotoPrev;
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
    margin: '20px',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignContent:'center',
    alignItems:'center'
  },
  montserratThin: {
    fontFamily: 'MontserratAlternates-Thin',
    fontSize: 16,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    height: '100%',
    gap: 20,
  },
  headerText: {
    fontFamily: 'MontserratAlternates-Bold',
    fontSize: 26,
    color: 'black',
    fontWeight: 'normal',
    textAlign:'center'
  },
  verticalFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  headerDesciption: {
    fontFamily: 'MontserratAlternates-Bold',
    fontSize: 16,
    color: 'black',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  backImage: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
