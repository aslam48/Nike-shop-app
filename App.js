import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from "./src/navigation";



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

 
});
