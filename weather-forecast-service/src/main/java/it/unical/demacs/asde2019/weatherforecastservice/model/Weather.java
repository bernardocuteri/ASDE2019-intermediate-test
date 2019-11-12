package it.unical.demacs.asde2019.weatherforecastservice.model;

import java.util.ArrayList;

public class Weather {
	
	private String cityName;
	
	ArrayList<Forecast> weatherConditions;

	public Weather(String cityName, ArrayList<Forecast> weatherConditions) {
		super();
		this.cityName = cityName;
		this.weatherConditions = weatherConditions;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public ArrayList<Forecast> getWeatherConditions() {
		return weatherConditions;
	}

	public void setWeatherConditions(ArrayList<Forecast> weatherConditions) {
		this.weatherConditions = weatherConditions;
	}
	
	
	
}
