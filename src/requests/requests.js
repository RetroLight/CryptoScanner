import axios from "axios";

export const getCoinsList = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d')
        return response.data
    } catch(e) {
        console.log(e)
    }
}
