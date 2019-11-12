package it.unical.demacs.asde2019.weatherforecastservice.model;

import java.util.Random;

public class Forecast {
	String value;
	int temperature;
	String day;
	public Forecast(String day){
		Random random = new Random();
		int max = 30;
		int min = 0;
		temperature = random.nextInt((max - min) + 1) + min;
		max = 2;
		min = 0;
		String[] values =  {"cloudy", "sunny", "rainy"};
		value = values[random.nextInt((max - min) + 1) + min];
		this.day = day;
	}
	
	public Forecast(String value, int temperature, String day) {
		this.value = value;
		this.temperature = temperature;
		this.day = day;
	}
}
