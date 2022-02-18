import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {layout} from "../constants/layout";
import {colors} from "../constants/colors";

const CryptoItem = props => {
    const {
        image,
        name,
        market_cap_rank,
        symbol,
        price_change_percentage_24h,
        current_price,
        market_cap
    } = props.coinData

    const priceStatus = price_change_percentage_24h > 0;

    const marketCapHandler = (mCap) => {
        if(mCap > 1000000000000) {
            return `${(mCap / 1000000000000).toFixed(3)} T`
        } else {
            if(mCap > 1000000000) {
                return `${(mCap / 1000000000).toFixed(3)} B`
            } else {
                if(mCap > 1000000) {
                    return `${(mCap / 1000000).toFixed(2)} M`
                }
            }
        }
    }

    return (
        <View style={styles.cryptoItem}>
            <View style={styles.coinImgCont}>
                <Image style={{width: '100%', height: '100%'}} source={{uri: image}}/>
            </View>
            <View>
                <Text style={styles.titleTxt}>{name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{...styles.coinRateCont, marginRight: layout.textSpacing}}>
                        <Text style={styles.txt}>{market_cap_rank}</Text>
                    </View>
                    <Text style={{...styles.subTxt, marginRight: layout.textSpacing}}>{symbol.toUpperCase()}</Text>
                    <AntDesign style={{marginRight: layout.textSpacing}}
                               name={priceStatus ? 'caretup' : 'caretdown'}
                               size={12} color={priceStatus ? colors.riseColor : colors.downColor} />
                    <Text style={{...styles.subTxt, color: priceStatus ? colors.riseColor : colors.downColor}}>{price_change_percentage_24h.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.priceCont}>
                <View>
                    <Text style={{...styles.titleTxt, color: priceStatus ? colors.riseColor : colors.downColor, letterSpacing: 1.5}}>{current_price}$</Text>
                </View>
                <View>
                    <Text style={styles.subTxt}>MCap {marketCapHandler(market_cap)}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cryptoItem: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: colors.lineColor,
        alignItems: 'center'
    },
    titleTxt: {
        color: colors.text.commonTxtColor,
        fontWeight: 'bold',
        marginBottom: 2,
        fontSize: 18
    },
    txt: {
        color: colors.text.commonTxtColor,
        fontSize: 16,
        fontWeight: '700'
    },
    subTxt: {
        color: colors.text.subTxtColor,
        fontSize: 16
    },
    coinImgCont: {
        width: 26,
        height: 26,
        marginRight: 8
    },
    coinRateCont: {
        backgroundColor: '#333546',
        width: 22,
        height: 22,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    priceCont: {
        marginLeft: 'auto',
        alignItems: 'flex-end'
    }
})

export default CryptoItem;
