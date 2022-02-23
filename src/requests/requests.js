import axios from "axios";

export const getCoinsList = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d')
        return response.data
    } catch(e) {
        console.log(e)
    }
}

export const getCoinDetailsData = async (coinId) => {
    try{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getCoinMarketChart = async (coinId) => {
    try{
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=hourly`)
        return response.data
    } catch(e) {
        console.log(e)
    }
}
