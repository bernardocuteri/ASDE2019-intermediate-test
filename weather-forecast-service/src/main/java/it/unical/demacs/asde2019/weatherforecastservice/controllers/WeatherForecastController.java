package it.unical.demacs.asde2019.weatherforecastservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;
import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherForcastService;

@RestController
public class WeatherForecastController {

	@Autowired
	WeatherForcastService weatherService;
	
	@CrossOrigin
	@GetMapping("/getForecasts")
	public List<Forecast> getForcast(@RequestParam String location){
		return weatherService.getForecast(location);
	}
}
