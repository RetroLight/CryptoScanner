import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from "./src/navigation/AppNavigator";

import {colors} from './src/constants/colors';
import {layout} from "./src/constants/layout";

import HomeScreen from './src/screens/HomeScreen';
import CoinDetailsScreen from './src/screens/CoinDetailsScreen';
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from "@rainbow-me/animated-charts";
import CoinDetailsHeader from "./src/components/CoinDetailsHeader";
import {AntDesign} from "@expo/vector-icons";

export default function App() {
    return (
        <NavigationContainer theme={
            {
                colors: {
                    background: colors.appBg
                }
            }}>
            <View style={styles.container}>
                <AppNavigator/>
                <StatusBar style="auto"/>
            </View>
        </NavigationContainer>
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
