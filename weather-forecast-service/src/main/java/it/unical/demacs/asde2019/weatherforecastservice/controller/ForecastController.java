package it.unical.demacs.asde2019.weatherforecastservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.model.Forecast;
import it.unical.demacs.asde2019.weatherforecastservice.model.ParamLocation;
import it.unical.demacs.asde2019.weatherforecastservice.services.ForecastService;

@RestController
public class ForecastController {

	@Autowired
	ForecastService service;
	
	@CrossOrigin
	@PostMapping("/get-forecast")
	public List<Forecast> get(@RequestBody ParamLocation location) {
		System.err.println("location " + location);
		return service.get(location.getLocation());
	}
	
}
