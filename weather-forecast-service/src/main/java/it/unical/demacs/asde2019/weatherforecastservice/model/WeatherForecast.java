package it.unical.demacs.asde2019.weatherforecastservice.model;

import java.util.ArrayList;

public class WeatherForecast {
	
	private ArrayList<WeatherDay> days = new ArrayList<>();

	public WeatherForecast(ArrayList<WeatherDay> days) {
		super();
		this.days = days;
	}

	public ArrayList<WeatherDay> getDays() {
		return days;
	}

	public void setDays(ArrayList<WeatherDay> days) {
		this.days = days;
	}
	
}