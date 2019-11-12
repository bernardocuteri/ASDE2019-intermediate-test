import BlogBaseInstance from './BlogBaseInstance'


export default class BlogServiceClient {

    static getWheather = (cityName) => {
        return BlogBaseInstance.get("getWheather", {
            params: { cityName: cityName}
          });
    }






    static getPlayer = () => {
        return BlogBaseInstance.get("getPlayer");
    }

    static makeABet = (coins, index) => {
        return BlogBaseInstance.get("makeABet", {
            params: { coins: coins, playerMakeBet: index }
          });
    }

}