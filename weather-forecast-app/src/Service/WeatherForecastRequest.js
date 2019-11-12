import WeatherForecastService from './WeatherForecastService';

export default class WeatherForecastRequest {

    static cityRequest = (value) => {
        return WeatherForecastService.get("/citySelect", 
        {params: {location: value}
        });
    }
}

