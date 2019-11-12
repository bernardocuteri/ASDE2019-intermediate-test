package it.unical.demacs.asde2019.weatherforecastservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;
import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherService;

@RestController
public class WeatherController
{
	@Autowired
	WeatherService weatherService;

	@CrossOrigin
	@PostMapping("/submitLocation")
	public List<Forecast> getWeather(@RequestBody String location)
	{
		return weatherService.getForecasts(location);
	}
}
