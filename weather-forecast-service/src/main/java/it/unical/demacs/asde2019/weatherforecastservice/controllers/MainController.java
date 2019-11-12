package it.unical.demacs.asde2019.weatherforecastservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.model.OutputWeather;
import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherService;

@RestController
public class MainController {

	@Autowired
	private WeatherService weatherService;
	
	@CrossOrigin
	@PostMapping("/howIsWeather")
	public OutputWeather howIsWeather(@RequestBody String location){
		return weatherService.howIsWeather(location);
	}
}
