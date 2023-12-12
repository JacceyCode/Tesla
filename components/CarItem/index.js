import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <View>
        <StyledButton
          type="primary"
          onPress={() => {
            console.warn("Custom order button pressed");
          }}
        >
          Custom Order
        </StyledButton>

        <StyledButton
          type="secondary"
          onPress={() => {
            console.warn("Existing Inventory button pressed");
          }}
        >
          Exiting Inventory
        </StyledButton>
      </View>
    </View>
  );
}

export default CarItem;
