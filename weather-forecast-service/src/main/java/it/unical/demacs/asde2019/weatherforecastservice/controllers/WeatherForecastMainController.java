package it.unical.demacs.asde2019.weatherforecastservice.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.services.FakeDBWeeather;
import it.unical.demacs.asde2019.weatherforecastservice.models.DayWeatherForecast;

@RestController
public class WeatherForecastMainController {
	
	String[] weathers = {"cloudy", "sunny", "rainy"} ;
	List<String> days = new ArrayList<>();
	
	@Autowired
	FakeDBWeeather dbService;
	
	 @PostConstruct
	 public void init() {
		 System.out.println("init controller");
		 days.add("Today");
		 days.add("Tomorrow");
		 days.add("Dayafter");
	 }

	@CrossOrigin
	@PostMapping("/getWeather")
	public List<DayWeatherForecast> getWeather(@RequestParam String location) {
		List<DayWeatherForecast> listOfWeatherForecast = dbService.getWeatherOfLocation(location);
		if(listOfWeatherForecast != null) {
			return listOfWeatherForecast;
		}
		
		for (String day : days) {
			listOfWeatherForecast.add(new DayWeatherForecast(weathers[giveMeRandomNumber(2, 0)], giveMeRandomNumber(30, 0), day));
		}
	
		return listOfWeatherForecast;
	}
	
	private int giveMeRandomNumber(int max, int min) {
        int range = max - min + 1; 
        return  (int) ((Math.random() * range)+min);
	}
}


