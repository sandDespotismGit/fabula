import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {PullView} from 'react-native-pull';
import {useState} from 'react';

// функция, которая рендерит компонент
const PullupStylesStylePhoto = () => {
  const [promptsState, setPromptsState] = useState(0);
  return (
    <View style={styles.main}>
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={() => setPromptsState(0)}>
          <Text style={styles.imageInputText}>Стили</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPromptsState(1)}>
          <Text style={styles.imageInputText}>Лоры</Text>
        </TouchableOpacity>
      </View>
      {promptsState == 0 ? (
        <View style={styles.mainBlocks}>
          <View style={styles.blockStyle}>
            <View style={styles.leftSide}></View>
            <View style={styles.rightSide}>
              <Text style={styles.blockStyleTextSmall}>Стиль</Text>
              <Text style={styles.blockStyleText}>
                Допустим здесь название стиля, оно может быть длинным
              </Text>
            </View>
          </View>
          <View style={styles.blockStyle}>
            <View style={styles.leftSide}></View>
            <View style={styles.rightSide}>
              <Text style={styles.blockStyleTextSmall}>Стиль</Text>
              <Text style={styles.blockStyleText}>
                Допустим здесь название стиля, оно может быть длинным
              </Text>
            </View>
          </View>
          <View style={styles.blockStyle}>
            <View style={styles.leftSide}></View>
            <View style={styles.rightSide}>
              <Text style={styles.blockStyleTextSmall}>Стиль</Text>
              <Text style={styles.blockStyleText}>
                Допустим здесь название стиля, оно может быть длинным
              </Text>
            </View>
          </View>
          <View style={styles.blockStyle}>
            <View style={styles.leftSide}></View>
            <View style={styles.rightSide}>
              <Text style={styles.blockStyleTextSmall}>Стиль</Text>
              <Text style={styles.blockStyleText}>
                Допустим здесь название стиля, оно может быть длинным
              </Text>
            </View>
          </View>
          <View style={styles.blockStyle}>
            <View style={styles.leftSide}></View>
            <View style={styles.rightSide}>
              <Text style={styles.blockStyleTextSmall}>Стиль</Text>
              <Text style={styles.blockStyleText}>
                Допустим здесь название стиля, оно может быть длинным
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.mainBlocks}>
          <View style={styles.blockStyle}>
            <View style={styles.leftSide}></View>
            <View style={styles.rightSide}>
              <Text style={styles.blockStyleTextSmall}>Лора</Text>
              <Text style={styles.blockStyleText}>
                Эльфы
              </Text>
            </View>
          </View>
          <View style={styles.blockStyle}>
            <View style={styles.leftSide}></View>
            <View style={styles.rightSide}>
              <Text style={styles.blockStyleTextSmall}>Лора</Text>
              <Text style={styles.blockStyleText}>
                Эльфы
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
export default PullupStylesStylePhoto;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftSide: {
    display: 'flex',
    width: '50%',
    height: '100%',
    backgroundColor: 'lavender',
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    padding: 5,
  },
  rightSide: {
    display: 'flex',
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 5,
  },
  mainBlocks: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
    gap: 15,
  },
  blockStyle: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: 150,
    maxHeight:250,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    minHeight: 300,
    width: '100%',
    justifyContent: 'flex-start',
  },
  headerTop: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    gap: 20,
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
    color: 'black',
    textDecorationLine: 'underline',
  },
  blockStyleText: {
    fontFamily: 'MontserratAlternates',
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  blockStyleTextSmall: {
    fontFamily: 'MontserratAlternates',
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    textAlign: 'left',
  },
  mainScroll: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'left',
  },
});
