package it.unical.demacs.asde2019.weatherforecastservice.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.model.Weather;
import it.unical.demacs.asde2019.weatherforecastservice.service.WeatherService;

@RestController
public class WeatherController {
	
	@Autowired
	WeatherService service;
	
	@CrossOrigin
	@PostMapping("/get")
	public ArrayList<Weather> add(@RequestParam String location) {
		return service.getWeather(location);
	}


}
