package it.unical.demacs.asde2019.weatherforecastservice.service;

import org.springframework.stereotype.Service;

import com.google.gson.Gson;

import it.unical.demacs.asde2019.weatherforecastservice.model.Weather;

@Service
public class WeatherService {

	public String getWeather(String location) {
		Weather weather = new Weather(location);
		return new Gson().toJson(weather); 
	}
	
}
