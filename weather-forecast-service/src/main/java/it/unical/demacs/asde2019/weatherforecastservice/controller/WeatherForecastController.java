package it.unical.demacs.asde2019.weatherforecastservice.controller;

import it.unical.demacs.asde2019.weatherforecastservice.model.City;
import it.unical.demacs.asde2019.weatherforecastservice.model.User;
import it.unical.demacs.asde2019.weatherforecastservice.model.WeatherForecast;
import it.unical.demacs.asde2019.weatherforecastservice.model.WeatherAppStatus;
import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherForecastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherForecastController {
	
	@Autowired
	private WeatherForecastService weatherForecastService;
	
	@CrossOrigin
	@PostMapping("/getWeather")
	public WeatherForecast getWeatherforCity(@RequestBody City city) {
		return weatherForecastService.getWeatherforCity(city.getCity());
	}
	
	@CrossOrigin
	@PostMapping("/selectUser")
	public WeatherAppStatus startApp(@RequestBody User user) {
		return weatherForecastService.startApp(user.getUsername());
	}
	
}