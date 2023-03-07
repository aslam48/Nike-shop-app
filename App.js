import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image} from "react-native";
// import ProductsScreens from "./src/screens/ProductsScreens";
// import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <ProductsScreens /> */}
      {/* <ProductDetailsScreen /> */}
      <ShoppingCart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

 
});
