package it.unical.demacs.asde2019.weatherforecastservice.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import it.unical.demacs.asde2019.weatherforecastservice.model.Weather;
import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherForecastServices;

@RestController
public class WeatherForecastController {
	
	@Autowired
	private WeatherForecastServices weatherForecastServices;
	
	@GetMapping("/root")
	public String root() {		
		return "Spring is working";
	}
	
	
	@CrossOrigin
	@GetMapping("/getWeather")
	public Weather getWeather(@RequestParam String city) {		
		return weatherForecastServices.getWeather(city);
	}
	
}
