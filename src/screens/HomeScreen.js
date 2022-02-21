import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native';
import CryptoItem from '../components/CryptoItem';
import {getCoinsList} from "../requests/requests";
import {colors} from "../constants/colors";

const HomeScreen = props => {
    const [coinsList, setCoinsList] = useState(false)
    const [isFetching, setIsFetching] = useState(null)

    let fetchCoinsList = async () => {
        setIsFetching(true)
        const fetchedCoinsList = await getCoinsList()
        setCoinsList(fetchedCoinsList)
        setIsFetching(false)
    }

    useEffect(() => {
        fetchCoinsList()
    }, [])

    if(isFetching) {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator color={colors.riseColor} size='large'/>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={coinsList}
                renderItem={({item}) => <TouchableOpacity onPress={() => props.navigation.navigate('CoinDetails', {coinId: item.id}) } activeOpacity={0.7}><CryptoItem coinData={item}/></TouchableOpacity>}
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
