package it.unical.demacs.asde2019.weatherforecastservice.model;

import java.util.ArrayList;

public class LocationStatus {
	private String location;
	private ArrayList <String> weather;
	
	public LocationStatus() {
		
	}
	
	public LocationStatus(String location, ArrayList <String> weather) {
		this.location = location;
		this.weather = weather;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public ArrayList <String> getWeather() {
		return weather;
	}

	public void setWeather(ArrayList <String> weather) {
		this.weather = weather;
	}
}
