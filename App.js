import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import {colors} from './src/constants/colors';
import {layout} from "./src/constants/layout";

import HomeScreen from './src/screens/HomeScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBg,
    paddingTop: 30,
    paddingHorizontal: layout.appHorizontalPadding
  }
});
