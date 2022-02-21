import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import {colors} from "../constants/colors";
import {FontAwesome5, Ionicons, SimpleLineIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

import coinData from "../../assets/data/crypto.json";

const CoinDetailsHeader = props => {
    const navigation = useNavigation();
    const {
        id,
        symbol,
        image,
        market_cap_rank
    } = props
    return (
        <View style={styles.coinDetailsHeader}>
            <View style={styles.iconsContainer}>
                <Ionicons onPress={() => navigation.goBack()} name="chevron-back" size={24} color="#fff"/>
            </View>
            <View style={styles.headerInfoCont}>
                <Image style={{width: 24, height: 24}} source={{uri: image}}/>
                <Text style={styles.coinTitle}>{symbol.toUpperCase()}</Text>
                <View style={styles.coinRankContainer}>
                    <Text style={styles.coinRankTxt}>#{market_cap_rank}</Text>
                </View>
            </View>
            <View style={{...styles.iconsContainer, justifyContent: 'flex-end'}}>
                <SimpleLineIcons style={{marginRight: 20}} name="magnifier" size={20} color="#fff"/>
                <FontAwesome5 name="star" size={20} color="#fff"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    coinDetailsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerInfoCont: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    coinTitle: {
        color: colors.text.commonTxtColor,
        fontSize: 16,
        fontWeight: '700',
        marginHorizontal: 5
    },
    coinRankContainer: {
        backgroundColor: '#333546',
        borderRadius: 6,
        paddingVertical: 2,
        paddingHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    coinRankTxt: {
        color: colors.text.subTxtColor,
        fontSize: 16,
        fontWeight: '700'
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 80
    }
})

export default CoinDetailsHeader;
