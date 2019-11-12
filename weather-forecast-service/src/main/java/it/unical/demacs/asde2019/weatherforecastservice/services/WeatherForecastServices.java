package it.unical.demacs.asde2019.weatherforecastservice.services;

import java.util.ArrayList;
import java.util.Random;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;
import it.unical.demacs.asde2019.weatherforecastservice.model.Weather;

@Service
public class WeatherForecastServices {

	private String CONDITIONS [] = {"cloudy", "sunny", "rainy"};
	private int RendeTemperature = 15;
	
	
	public Weather getWeather(String city) {
		
		ArrayList<Forecast> forecastList = new ArrayList<Forecast>();
		Weather weather = new Weather(city.toUpperCase(), forecastList);
		
		if(weather.getCityName().equals("RENDE")) {
					
			for (int i = 0; i < 3; i++) {
				int posicion = new Random().nextInt(3);
				Forecast forecast = new Forecast(RendeTemperature, CONDITIONS[posicion]);
				forecastList.add(forecast);
			}
			
		}
		else {
			for (int i = 0; i < 3; i++) {
				int posicion = new Random().nextInt(3);
				int temperature = new Random().nextInt(31);
				Forecast forecast = new Forecast(temperature, CONDITIONS[posicion]);
				forecastList.add(forecast);
			}
		}
		
		
		return weather;
	}
}
