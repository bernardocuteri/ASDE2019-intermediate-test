package it.unical.demacs.asde2019.weatherforecastservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.models.LocationForecast;
import it.unical.demacs.asde2019.weatherforecastservice.models.LocationInfo;
import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherForecastService;

@RestController
public class WeatherForecastController {

	@Autowired
	WeatherForecastService weatherForecastService;

	@CrossOrigin
	@PostMapping("/forecastInfo")
	public LocationForecast bet(@RequestBody LocationInfo locationInfo) {
		return weatherForecastService.getLocationForecast(locationInfo);
	}

}
