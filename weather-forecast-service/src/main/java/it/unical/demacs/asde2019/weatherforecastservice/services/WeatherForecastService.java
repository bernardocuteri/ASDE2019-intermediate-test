package it.unical.demacs.asde2019.weatherforecastservice.services;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;
import it.unical.demacs.asde2019.weatherforecastservice.model.ForecastGenerator;

@Service
public class WeatherForecastService {
	
		
	public Forecast getForecast(String city) {
			Forecast forecast = new Forecast();
			String[] weathers; 
			int[] temperatures; 
			if(city.equals("Rende")) {
				weathers = new String[3];
				temperatures  = new int[3];
				for(int i = 0; i < 3; i++) {
					weathers[i] = "rainy";
					temperatures[i] = 15;
				}
				
			} else {
				ForecastGenerator generator = new ForecastGenerator();
				temperatures = generator.generateTemperatures();
				weathers = generator.generateWeather();
			}
			forecast.setWeather(weathers);
			forecast.setTemperatures(temperatures);
			return forecast;
	}
	
}
