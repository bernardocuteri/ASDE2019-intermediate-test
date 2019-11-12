package it.unical.demacs.asde2019.weatherforecastservice.model;

import java.util.Random;

public class ForecastGenerator {

	private Random random;

	private String[] weathers;
	
	public ForecastGenerator() {
		weathers = new String[3];
		weathers[0] = "cloudy";
		weathers[1] = "sunny";
		weathers[2] = "rainy";
		random = new Random();
	}
	
	public String[] generateWeather() {
		String[] toReturnWeathers = new String[3];
		for(int i = 0; i < 3; i++) {
			int index = random.nextInt(2);
			toReturnWeathers[i] = weathers[index];
		}
		return toReturnWeathers;
	}
	
	public int[] generateTemperatures() {
		int[] toReturnTemperatures = new int[3];
		for(int i = 0; i < 3; i++) {
			toReturnTemperatures[i] = random.nextInt(30);
		}
		return toReturnTemperatures;
	}
	
}
