package it.unical.demacs.asde2019.weatherforecastservice.models;

import java.util.ArrayList;

public class LocationForecast {

	private String locationName;
	private ArrayList<Integer> temperatures;
	private ArrayList<String> weatherValues;

	public LocationForecast(String locationName, ArrayList<Integer> temperatures, ArrayList<String> weatherValues) {
		super();
		this.locationName = locationName;
		this.temperatures = temperatures;
		this.weatherValues = weatherValues;
	}

	public String getLocationName() {
		return locationName;
	}

	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}

	public ArrayList<Integer> getTemperatures() {
		return temperatures;
	}

	public void setTemperatures(ArrayList<Integer> temperatures) {
		this.temperatures = temperatures;
	}

	public ArrayList<String> getWeatherValues() {
		return weatherValues;
	}

	public void setWeatherValues(ArrayList<String> weatherValues) {
		this.weatherValues = weatherValues;
	}

}
