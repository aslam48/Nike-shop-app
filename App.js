import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image} from "react-native";

import Navigation from "./src/navigation";
import {Provider} from 'react-redux'
import {store} from './src/store/index'


export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigation/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
