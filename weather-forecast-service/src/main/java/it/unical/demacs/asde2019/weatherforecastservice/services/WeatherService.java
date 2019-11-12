package it.unical.demacs.asde2019.weatherforecastservice.services;

import java.util.ArrayList;
import java.util.Random;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.model.OutputWeather;

@Service
public class WeatherService {
	
	private String [] weathervalue;
	
	@PostConstruct()
	public void init(){
		weathervalue = new String[3];
		weathervalue[0] = "cloudy";
		weathervalue[1] = "sunny";
		weathervalue[2] = "rainy";
	}
	
	
	public OutputWeather howIsWeather(String location) {
		OutputWeather outputWeather = new OutputWeather();
		int temp[] = new int[3];
		String[] weath = new String[3];
		
		//there was a problem only with location, so I passed this type of string for to be in time
		if(location.equals("{\"location\":\"Rende\"}")) {
			for(int i=0; i<3; i++) {
				temp[i] = 15;
				weath[i] = "rainy";
			}
			outputWeather.setTemps(temp);
			outputWeather.setWeath(weath);
		}else {
			for(int i=0; i<3; i++) {
				int index = new Random().nextInt(3);
				weath[i] = weathervalue[index];
				int randomTemperature = new Random().nextInt(30);
				temp[i] = randomTemperature;
			}
			outputWeather.setTemps(temp);
			outputWeather.setWeath(weath);
		}
		
		return outputWeather;
	}
	
	

}
