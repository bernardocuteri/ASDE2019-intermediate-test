package it.unical.demacs.asde2019.weatherforecastservice.model;

import java.util.ArrayList;

public class ThreeDaysForecast {
	private ArrayList<Pair> forecast = new ArrayList<Pair>(3);

	public ThreeDaysForecast(ArrayList<Pair> forecast) {
		super();
		this.forecast = forecast;
	}

	public ArrayList<Pair> getForecast() {
		return forecast;
	}

	public void setForecast(ArrayList<Pair> forecast) {
		this.forecast = forecast;
	}

}
