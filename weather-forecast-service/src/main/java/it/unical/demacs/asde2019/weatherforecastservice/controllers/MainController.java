package it.unical.demacs.asde2019.weatherforecastservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;
import it.unical.demacs.asde2019.weatherforecastservice.model.Location;
import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherForecastService;

@RestController
public class MainController{
	
	@Autowired
	WeatherForecastService weatherForecastService;

	
	@CrossOrigin
	@PostMapping("/forecast")
	public Forecast[] forecast(@RequestBody Location location) {
		return weatherForecastService.forecast(location.getLocation());
	}
	
}
