package it.unical.demacs.asde2019.weatherforecastservice.services;

import java.util.ArrayList;
import java.util.Random;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.model.Location;
import it.unical.demacs.asde2019.weatherforecastservice.model.Pair;
import it.unical.demacs.asde2019.weatherforecastservice.model.ThreeDaysForecast;

@Service
public class WeatherForecastService {
	
	public static final String[] CONDITIONS =  {"cloudy", "sunny", "rainy"};
	public static final int DAYS = 3; 
	
	  public ThreeDaysForecast forecast (Location location) {
		  ArrayList<Pair> weather = new ArrayList<>(DAYS);
		  if(location.getCity().equals("Rende")) {
			  Pair p = new Pair(15, "rainy");
			  for(int i = 0; i < DAYS; i++)
				  weather.add(p);
			  return new ThreeDaysForecast(weather);
		  }
		  Random rand = new Random();
		  for(int i = 0; i < DAYS; i++) {
			  int temp = rand.nextInt(31);
			  int cond = rand.nextInt(3);
			  Pair p = new Pair(temp, CONDITIONS[cond]);
			  
			  weather.add(p);
		  }
		  return new ThreeDaysForecast(weather);
	  }

}
