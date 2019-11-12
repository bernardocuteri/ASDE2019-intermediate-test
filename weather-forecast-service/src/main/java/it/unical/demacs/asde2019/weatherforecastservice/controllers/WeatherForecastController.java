package it.unical.demacs.asde2019.weatherforecastservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.model.Location;
import it.unical.demacs.asde2019.weatherforecastservice.model.ThreeDaysForecast;
import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherForecastService;

@RestController
public class WeatherForecastController {
	
	@Autowired
	private WeatherForecastService wfservice;
	
	
	//Forecast
	@CrossOrigin
	@PostMapping("/forecast")
	public ThreeDaysForecast forecast(@RequestBody Location location) {
		return wfservice.forecast(location);
	}

}
