package it.unical.demacs.asde2019.weatherforecastservice.Model;

import java.util.ArrayList;
import java.util.List;

public class WeatherForecast {
	private String location_name;
	private List<Integer> temperatures;
	private List<String> weather_values;
	
	public WeatherForecast(String location_name, ArrayList<Integer> temperatures, List<String> weather_values) {
		super();
		this.location_name = location_name;
		this.temperatures = temperatures;
		this.weather_values = weather_values;
	}

	public String getLocation_name() {
		return location_name;
	}

	public void setLocation_name(String location_name) {
		this.location_name = location_name;
	}

	public List<Integer> getTemperatures() {
		return temperatures;
	}

	public void setTemperatures(List<Integer> temperatures) {
		this.temperatures = temperatures;
	}

	public List<String> getWeather_values() {
		return weather_values;
	}

	public void setWeather_values(List<String> weather_values) {
		this.weather_values = weather_values;
	}
}
