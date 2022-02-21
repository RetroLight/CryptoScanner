import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreen";
import CoinDetailScreen from "../screens/CoinDetailsScreen";

const Stack = createNativeStackNavigator()

export const AppNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CoinDetails" component={CoinDetailScreen} />
        </Stack.Navigator>
    )
}
