package it.unical.demacs.asde2019.weatherforecastservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;
import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherForecastService;

@RestController
public class WeatherForecastController {

	@Autowired
	private WeatherForecastService weatherForecastService;
		
		
	@CrossOrigin
	@PostMapping("/forecast")
	public Forecast bet(@RequestBody String city) {
		return weatherForecastService.getForecast(city);
	}

}
