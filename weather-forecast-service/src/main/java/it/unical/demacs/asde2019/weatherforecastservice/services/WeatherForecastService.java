package it.unical.demacs.asde2019.weatherforecastservice.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.models.LocationForecast;
import it.unical.demacs.asde2019.weatherforecastservice.models.LocationInfo;

@Service
public class WeatherForecastService {

	public final static int TEMPERATURES = 31;
	public final static String[] WEATHERVALUES = { "cloudy", "sunny", "rainy" };

	private Map<String, LocationForecast> locationsforecast = new HashMap<>();

	@PostConstruct
	public void init() {
		String location = "Rende";
		ArrayList<Integer> temperatures = new ArrayList<Integer>(
				Arrays.asList(new Integer(15), new Integer(15), new Integer(15)));
		ArrayList<String> weatherValues = new ArrayList<String>(
				Arrays.asList(new String("rainy"), new String("rainy"), new String("rainy")));

		locationsforecast.put(location, new LocationForecast(location, temperatures, weatherValues));
	}

	public LocationForecast getLocationForecast(LocationInfo locationInfo) {
		if (locationsforecast.containsKey(locationInfo.getLocationName())) {
			return locationsforecast.get(locationInfo.getLocationName());
		}
		return createForecast(locationInfo.getLocationName());
	}

	private LocationForecast createForecast(String locationName) {
		Random rand = new Random();
		String location = locationName;
		ArrayList<Integer> temperatures = new ArrayList<Integer>(
				Arrays.asList(rand.nextInt(TEMPERATURES), rand.nextInt(TEMPERATURES), rand.nextInt(TEMPERATURES)));
		ArrayList<String> weatherValues = new ArrayList<String>(Arrays.asList(
				WEATHERVALUES[rand.nextInt(WEATHERVALUES.length)], WEATHERVALUES[rand.nextInt(WEATHERVALUES.length)],
				WEATHERVALUES[rand.nextInt(WEATHERVALUES.length)]));

		LocationForecast newLocationForecast = new LocationForecast(location, temperatures, weatherValues);
		locationsforecast.put(location, newLocationForecast);

		return newLocationForecast;
		
	}

}
