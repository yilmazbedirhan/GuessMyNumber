import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}> {children} </Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 25,
    color: Colors.accent500,
    borderWidth: 3,
    borderRadius: 25,
    borderColor: Colors.accent500,
    padding: 15,
  },
});
