package it.unical.demacs.asde2019.weatherforecastservice.services;


import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.stereotype.Service;

import it.unical.demacs.asde2019.weatherforecastservice.domain.WheatherForCity;
import it.unical.demacs.asde2019.weatherforecastservice.domain.WheatherState;


@Service
public class WeatherService {

	
	private Map<String, WheatherForCity> wheatherForCitys = new HashMap<String, WheatherForCity>();
	
	
	public WheatherForCity getWheatherForCity(String nameOfCity){
		WheatherForCity wc = null;
		
		if(wheatherForCitys.containsKey(nameOfCity)) {
			
			wc = wheatherForCitys.get(nameOfCity);
		}
		else {
			Random rand = new Random();
			
			wc = new WheatherForCity();
			wc.setNameOfCity(nameOfCity);
			
			for (int i = 0; i < 3; i++) {
				WheatherState ws = new WheatherState(rand.nextInt(30), getWeather(rand.nextInt(3)));
				wc.getWheatherforDays().add(ws);
			}
			
			wheatherForCitys.put(nameOfCity, wc);
			
		}
		
		
		
		return wc;
	}
	
	public String getWeather(int option){
		
		switch (option) {
		case 0:
			return "cloudy";
		case 1:
			return "sunny";
		default:
			return "rainy";
		}
	}
	
	
	
}
