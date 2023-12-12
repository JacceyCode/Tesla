import { Pressable, Text, View } from "react-native";
import styles from "./styles";

function StyledButton({ type, onPress, children }) {
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const color = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: color }]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default StyledButton;
