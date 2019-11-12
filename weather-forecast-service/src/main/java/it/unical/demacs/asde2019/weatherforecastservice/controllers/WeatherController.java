package it.unical.demacs.asde2019.weatherforecastservice.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;
import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherService;

@RestController
public class WeatherController {
		
	@Autowired
	private WeatherService weatherService;
	
	@CrossOrigin
	@GetMapping("/")
	public String welcomeMessage() {
		return "<h1>Welcome to the Weather</h1>";
	}
	
	@CrossOrigin
	@GetMapping("/weather")
	public ArrayList<Forecast> getWeather(@RequestParam String location) {
		return weatherService.getWeather(location);
	}
	
}
