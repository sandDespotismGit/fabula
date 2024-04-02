import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";

const Resize = observer(({ setDimensions }) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setDimensions(1024, 1024)}>
        <Text style={styles.headerText}>1:1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setDimensions(1344, 1024)}>
        <Text style={styles.headerText}>4:3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setDimensions(1024, 1344)}>
        <Text style={styles.headerText}>3:4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setDimensions(1344, 768)}>
        <Text style={styles.headerText}>16:9</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setDimensions(768, 1344)}>
        <Text style={styles.headerText}>9:16</Text>
      </TouchableOpacity>
    </View>
  );
});
export default Resize;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerDesciptionStyleName: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
    color: "black",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  main: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    justifyContent: "space-between",
    padding: 20
  },
  montserratThin: {
    fontFamily: "MontserratAlternates-Thin",
    fontSize: 14,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
    height: "10%",
    gap: 20,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  headerText: {
    fontFamily: "MontserratAlternates-Bold",
    fontSize: 26,
    color: "black",
    fontWeight: "normal",
    textAlign: "center",
  },
  verticalFlex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  headerDesciption: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
    color: "black",
    fontWeight: "600",
    textAlign: "center",
  },
  helperButton: {
    width: "15%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  headerEquals: {
    display: "flex",
    flexDirection: "row",
    width: "15%",
  },
  headerTextEquals: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
    justifyContent: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    justifyContent: "space-between",
  },
  imageInputOpacity: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imageInput: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: 200,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  imageInputText: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
    fontWeight: "600",
  },
  mainScroll: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: 20,
  },
  buttonContainer: {
    display: "flex",
    marginBottom: 20,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    justifyContent: "space-between",
  },
  imageInputOpacity: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imageInput: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  imageInputText: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
  pickedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    objectFit: "contain",
  },
  resultContainer: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: 300,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "black",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  imageInputText: {
    fontFamily: "MontserratAlternates",
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
  pickedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    objectFit: "cover",
  },
  input: {
    width: "80%",
    color: "black",
    fontSize: 14,
    fontFamily: "MontserratAlternates",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  helperTextContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    alignContent: "flex-start",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 5,
    borderTopColor: "gray",
    borderTopWidth: 1,
    padding: 10,
  },
  helperText: {
    fontSize: 14,
    color: "gray",
    fontFamily: "MontserratAlternates",
    width: "80%",
    textAlign: "left",
  },
});
