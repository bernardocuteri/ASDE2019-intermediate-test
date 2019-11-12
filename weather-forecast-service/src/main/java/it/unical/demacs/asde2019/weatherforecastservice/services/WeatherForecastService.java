package it.unical.demacs.asde2019.weatherforecastservice.services;

import org.springframework.stereotype.Service;
import java.util.*;

import it.unical.demacs.asde2019.weatherforecastservice.model.City;

@Service
public class WeatherForecastService {
	
	public String userInput;
	public String userOutput;
	public final static int TEMP = 31;
	public final static int CHOICES = 3;
	
	private Map<Integer, String> forecast = new HashMap<Integer, String>();
	
	
	/*private int[] temperature = new int[30];
	
	for (int i = 0; i < temperature.length; i++) {
		temperature[i] = i;
	}*/
	
	
	public String getWeather(City city) {
		
		forecast.put(1,"Cloudy");
		forecast.put(2,"Sunny");
		forecast.put(3,"Rainy");
		
		Random rand = new Random();
		
		int rand_temp1 = rand.nextInt(TEMP);
		int rand_temp2 = rand.nextInt(TEMP);
		int rand_temp3 = rand.nextInt(TEMP);
		
		int weather_choice1 = rand.nextInt(CHOICES);
		int weather_choice2 = rand.nextInt(CHOICES);
		int weather_choice3 = rand.nextInt(CHOICES);
		
				if(city.getCity().equalsIgnoreCase("RENDE")) 
				{
					userOutput = "3 days of rain with +15 degrees";
					return userOutput;
				}
					//System.out.print("3 days of rain with +15 degrees");
				else 
				{
					userOutput = "Today is " + forecast.get(weather_choice1) + "with " + rand_temp1 + 
							" degrees, Tomorrow will be " + forecast.get(weather_choice2) + "with " + rand_temp2 +
							" degrees, the day after tomorrow will be " + forecast.get(weather_choice3) + " with " + rand_temp3 + " degrees.";
					return userOutput;
				}
					/*System.out.print("Today is " + forecast.get(weather_choice1) + "with " + rand_temp1 + 
							" degrees, Tomorrow will be " + forecast.get(weather_choice2) + "with " + rand_temp2 +
							" degrees, the day after tomorrow will be " + forecast.get(weather_choice3) + " with " + rand_temp3 + " degrees.");*/
					
	}

}
