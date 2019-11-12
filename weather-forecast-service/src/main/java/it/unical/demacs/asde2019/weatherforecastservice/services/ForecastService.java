package it.unical.demacs.asde2019.weatherforecastservice.services;

import java.util.Random;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.model.DTOWeather;
import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;
import it.unical.demacs.asde2019.weatherforecastservice.model.Location;

@Service
public class ForecastService {

	public DTOWeather getForecasts(Location location) {
		if (location.getLocation().equals("rende")) {
			Forecast forecast = new Forecast("rainy", 15);
			DTOWeather forecasts = new DTOWeather(new Forecast[] { forecast, forecast, forecast });
			return forecasts;
		}
		
		
		Random random = new Random();
		Forecast forecasts[] = new Forecast[3];

		for (int i = 0; i < 3; i++) {
			Forecast current = new Forecast(getWeather(random.nextInt(3)), random.nextInt(31));
			forecasts[i] = current;
		}
		return new DTOWeather(forecasts);

	}

	private String getWeather(int nextInt) {
		if (nextInt == 0)
			return "cloudy";
		if (nextInt == 1)
			return "sunny";
		return "rainy";
	}

}
