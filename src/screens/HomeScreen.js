import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CryptoItem from '../components/CryptoItem';
import cryptoData from '../../assets/data/cryptocurrencies.json'

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cryptoData}
                renderItem={({item}) => <CryptoItem coinData={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default HomeScreen;
