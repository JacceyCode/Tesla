import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

function CarsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={(item) => item.name}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={Dimensions.get("screen").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default CarsList;
