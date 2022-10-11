import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 16,
    backgroundColor: Colors.primary500,
    marginHorizontal: 30,
    borderRadius: 15,
    elevation: 15,
  },
});
