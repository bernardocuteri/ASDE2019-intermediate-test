package it.unical.demacs.asde2019.weatherforecastservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import it.unical.demacs.asde2019.weatherforecastservice.service.WeatherService;

@RestController
public class WeatherControllers {
	@Autowired
	WeatherService weatherService;
	
	@CrossOrigin
	@PostMapping("/getWeather")
	public String getWeather(@RequestBody String location) {
		JsonObject convertedObject = new Gson().fromJson(location, JsonObject.class);
		return weatherService.getWeather(convertedObject.get("location").getAsString());
	}
}
