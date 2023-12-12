import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

function CarItem({ name, tagline, taglineCTA, image }) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
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
