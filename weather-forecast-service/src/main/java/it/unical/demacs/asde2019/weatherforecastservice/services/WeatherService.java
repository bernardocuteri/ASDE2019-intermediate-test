package it.unical.demacs.asde2019.weatherforecastservice.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;

@Service
public class WeatherService
{
	Random randomGen = new Random();

	public List<Forecast> getForecasts(String location)
	{
		final List<Forecast> forecasts = new ArrayList<>();
		if(location.contains("Rende"))
		{
			final Forecast rendeWeather = new Forecast(15, "RAINY");
			forecasts.add(rendeWeather);
			forecasts.add(rendeWeather);
			forecasts.add(rendeWeather);
			return forecasts;
		}

		for (int i = 0; i < 3; i++)
		{
			final int temp = randomGen.nextInt(30);
			final int weatherNumber = randomGen.nextInt(3);
			String weather = null;
			switch(weatherNumber)
			{
			case 0:
				weather = "SUNNY";
				break;
			case 1:
				weather = "CLOUDY";
				break;
			case 2:
				weather = "RAINY";
				break;
			}
			forecasts.add(new Forecast(temp, weather));
		}

		return forecasts;
	}
}
