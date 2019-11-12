package it.unical.demacs.asde2019.weatherforecastservice.services;

import java.util.Random;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;

@Service
public class WeatherForecastService {

	public final static String[] WEATHERS = {"cloudy", "rainy", "sunny"};

	public Forecast[] forecast(String location) {
		
		Forecast[] threeDays = new Forecast[3];
		Forecast f = new Forecast();

		if (location.equals("Rende")) {
			f.setTemperature(15);
			f.setWeather(WEATHERS[1]); // SET RAINY

			for (int i = 0; i < threeDays.length; i++)
				threeDays[i] = f;

		} else {
			for (int i = 0; i < threeDays.length; i++) {
				f = new Forecast();
				f.setTemperature(new Random().nextInt(31));
				f.setWeather(WEATHERS[new Random().nextInt(3)]);
				threeDays[i] = f;
			}
		}
		return threeDays;
	}

}
