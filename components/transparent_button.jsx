import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { SvgXml } from 'react-native-svg';

const TransparentButton = ({text, onPress, icon='', disabled=false}) => {
  return (
    <TouchableOpacity style={styles.opacity} onPress={onPress} disabled={disabled}>
      <View style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
        {icon != '' ? <SvgXml xml={icon} height={20} width={20}/> : null}
        
      </View>
    </TouchableOpacity>
  );
};
export default TransparentButton;
const styles = StyleSheet.create({
  opacity: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignContent:'center',
    alignItems:'center'
  },
  button: {
    width: 200,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderWidth:2,
    borderColor:'black',
    borderStyle:'solid',
    borderRadius:30,
    gap:10
  },
  textButton: {
    fontFamily: 'MontserratAlternates',
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});
