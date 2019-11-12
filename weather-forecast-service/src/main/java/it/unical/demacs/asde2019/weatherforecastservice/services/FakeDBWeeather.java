package it.unical.demacs.asde2019.weatherforecastservice.services;

import java.awt.List;
import java.util.ArrayList;
import java.util.HashMap;

import javax.annotation.PostConstruct;

import it.unical.demacs.asde2019.weatherforecastservice.models.DayWeatherForecast;

import org.springframework.stereotype.Service;


@Service
public class FakeDBWeeather {

	private HashMap<String, ArrayList> db;
	
	@PostConstruct
	public void init() {
		db =  new HashMap<>();
		ArrayList<DayWeatherForecast> listOfDay = new ArrayList<DayWeatherForecast>();
		DayWeatherForecast today = new DayWeatherForecast("rainy", 15, "today");
		DayWeatherForecast tomorrow  = new DayWeatherForecast("rainy", 15, "tomorrow");
		DayWeatherForecast dayAfter = new DayWeatherForecast("rainy", 15, "dayAfter");
		listOfDay.add(today);
		listOfDay.add(tomorrow);
		listOfDay.add(dayAfter);
		db.put("Rende", listOfDay);
	}
	
	public ArrayList<DayWeatherForecast> getWeatherOfLocation(String location) {
		if(db.containsKey(location)) 
			return db.get(location);
		return null;
	}
	
	
}
