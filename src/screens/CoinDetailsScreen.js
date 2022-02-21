import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Dimensions, StyleSheet} from 'react-native';
import { LineChart } from 'react-native-wagmi-charts';

import {AntDesign} from "@expo/vector-icons";
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';

import {layout} from '../constants/layout';
import {colors} from '../constants/colors';

import CoinDetailsHeader from "../components/CoinDetailsHeader";

import coinData from '../../assets/data/crypto.json';


const CoinDetailScreen = props => {
    const deviceWidth = Dimensions.get('window').width;
    const {
        id,
        symbol,
        prices,
        name,
        image: {thumb},
        market_data: {
            market_cap_rank,
            current_price,
            price_change_percentage_24h
        },
    } = coinData;

    console.log(props.route.params['coinId'])

    const priceStatus = price_change_percentage_24h > 0 ? colors.riseColor : colors.downColor;

    const [coinVal, setCoinVal] = useState('1')
    const [fiatVal, setFiatVal] = useState(current_price.usd.toString())

    const changeCoinVal = (val) => {
        setCoinVal(val);
        const floatValue = parseFloat(val.replace(',', '.')) || 0
        setFiatVal((floatValue * current_price.usd).toString())
    }

    const changeFiatVal = (val) => {
        setFiatVal(val);
        const floatValue = parseFloat(val.replace(',', '.')) || 0
        setCoinVal((floatValue / current_price.usd).toString())
    }

    class pricesData {
        constructor(timestamp, value) {
            this.timestamp = timestamp
            this.value = value
        }
    }

    let pricesTransform = []
    for(let i in prices) {
        pricesTransform.push(new pricesData(prices[i][0], prices[i][1]))
    }


    return (
        <View style={styles.screen}>
            <LineChart.Provider data={pricesTransform}>
                <CoinDetailsHeader
                    id={id}
                    symbol={symbol}
                    image={thumb}
                    market_cap_rank={market_cap_rank}
                />
                <View>
                    <View style={styles.CoinDetailsContainer}>
                        <View>
                            <Text style={styles.txt}>{name}</Text>
                            <Text style={styles.priceTxt}>{current_price.usd}</Text>
                        </View>
                        <View style={{
                            ...styles.percentBlock,
                            backgroundColor: priceStatus
                        }}>
                            <AntDesign style={{marginRight: layout.textSpacing}}
                                       name={price_change_percentage_24h > 0 ? 'caretup' : 'caretdown'}
                                       size={12} color={colors.text.commonTxtColor}/>
                            <Text style={styles.txt}>{price_change_percentage_24h.toFixed(2)}%</Text>
                        </View>
                    </View>
                    <LineChart.DatetimeText style={{color: colors.text.commonTxtColor, fontSize: 14, fontWeight: '600'}}/>
                </View>
                <LineChart height={200}>
                    <LineChart.Path color={prices[0][1] > current_price.usd ? colors.downColor : colors.riseColor}>
                        <LineChart.Gradient />
                    </LineChart.Path>
                    <LineChart.CursorCrosshair>
                        <LineChart.Tooltip
                            textStyle={{color: colors.text.commonTxtColor}}
                            style={styles.tooltip}/>
                    </LineChart.CursorCrosshair>
                </LineChart>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.txt}>{symbol.toUpperCase()}</Text>
                        <TextInput
                            keyboardType='decimal-pad'
                            style={styles.textInput}
                            value={coinVal}
                            onChangeText={changeCoinVal}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.txt}>USD</Text>
                        <TextInput
                            keyboardType='decimal-pad'
                            style={styles.textInput}
                            value={fiatVal}
                            onChangeText={changeFiatVal}
                        />
                    </View>
                </View>
            </LineChart.Provider>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    CoinDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginTop: 20
    },
    txt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.text.commonTxtColor
    },
    priceTxt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.text.commonTxtColor
    },
    percentBlock: {
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 6
    },
    inputContainer: {
        flexDirection: 'row',
        width: '48%',
        alignItems: 'center'
    },
    textInput: {
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderBottomColor: colors.lineColor,
        flex: 1,
        marginLeft: 4,
        color: colors.text.commonTxtColor,
        fontSize: 16,
        fontWeight: '600'
    },
    tooltip: {
        backgroundColor: '#333546',
        borderRadius: 4
    }
})

export default CoinDetailScreen;
