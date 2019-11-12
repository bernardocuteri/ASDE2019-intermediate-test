package it.unical.demacs.asde2019.weatherforecastservice.services;

import java.util.ArrayList;
import java.util.Random;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;

@Service
public class WeatherService {
	private ArrayList<String> possible_forecast = new ArrayList<String>();

	@PostConstruct
	public void init() {
		possible_forecast.add("rainy");
		possible_forecast.add("cloudy");
		possible_forecast.add("sunny");

	}

	public ArrayList<Forecast> getWeather(String location) {
		ArrayList<Forecast> weather = new ArrayList<Forecast>();

		if (location.toLowerCase().equals("rende")) {
			for (int i = 0; i < 3; i++) {
				Forecast f = new Forecast(possible_forecast.get(0), 15);
				weather.add(f);
			}
		} else {
			Random r = new Random();
			for (int i = 0; i < 3; i++) {
				String forecast = possible_forecast.get(r.nextInt(3));
				int degrees = r.nextInt(15);
				Forecast f = new Forecast(forecast, degrees);
				weather.add(f);
			}
		}

		return weather;
	}

}
