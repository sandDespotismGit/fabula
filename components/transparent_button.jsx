import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TransparentButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.opacity} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderWidth:2,
    borderColor:'black',
    borderStyle:'solid',
    borderRadius:30
  },
  textButton: {
    fontFamily: 'MontserratAlternates',
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});
