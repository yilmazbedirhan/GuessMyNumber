import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        android_ripple={{ color: Colors.button500 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 10,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.button500,
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 30,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
