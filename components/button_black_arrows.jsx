import {View, Text, TouchableOpacity, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
const rightArrow = `<svg width="59" height="22" viewBox="0 0 59 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 11.2564H57M57 11.2564L44.7857 1M57 11.2564L44.7857 21" stroke="black" stroke-width="2"/>
</svg>`;
const leftArrow = `<svg width="59" height="22" viewBox="0 0 59 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59 10.7436L2 10.7436M2 10.7436L14.2143 21M2 10.7436L14.2143 0.999999" stroke="black" stroke-width="2"/>
</svg>`;

const ButtonArrows = ({strRoute, strText}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonMainContainer}
      onPress={() => navigation.navigate(strRoute)}>
      <SvgXml xml={rightArrow} />
      <View style={styles.buttonContainer}>
        <Text style={styles.ok}>{strText}</Text>
      </View>
      <SvgXml xml={leftArrow} />
    </TouchableOpacity>
  );
};
export default ButtonArrows;
const styles = StyleSheet.create({
  ok: {
    fontFamily: 'MontserratAlternates-Bold',
    color: 'white',
    fontSize: 14,
    fontWeight: '800',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    backgroundColor: 'black',
    borderRadius: 30,
    justifyContent: 'center',
    paddingTop: 11,
    paddingBottom: 11,
    paddingLeft: 15,
    width: 158,
    paddingRight: 15,
  },
  buttonMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
});
