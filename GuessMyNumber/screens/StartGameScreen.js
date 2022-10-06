import { TextInput, View, StyleSheet, Pressable } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    backgroundColor: "#AC44F2",
    marginHorizontal: 30,
    borderRadius: 15,
    elevation: 15,
  },
  textInput: {
    height: 50,
    width: 100,
    fontSize: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#FAD800",
    color: "#FAD800",
    marginVertical: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
