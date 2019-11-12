package it.unical.demacs.asde2019.weatherforecastservice.controllers;

import it.unical.demacs.asde2019.weatherforecastservice.model.LocationStatus;
import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherForecastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherForecastController {
	@Autowired
	private WeatherForecastService wfs;
	
	@CrossOrigin
	@PostMapping("/post")
	public LocationStatus get(@RequestBody String location) {
		return wfs.get(location);
	}
}
