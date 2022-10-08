import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children} </Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 15,
    margin: 25,
    padding: 25,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 30,
    fontWeight: "bold",
  },
});
