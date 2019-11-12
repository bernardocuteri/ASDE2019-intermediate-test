package it.unical.demacs.asde2019.weatherforecastservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.model.DTOWeather;
import it.unical.demacs.asde2019.weatherforecastservice.model.Location;
import it.unical.demacs.asde2019.weatherforecastservice.services.ForecastService;

@RestController
public class ForecastsController {

	@Autowired
	private ForecastService forecast_service;

	@CrossOrigin
	@PostMapping("/requestForecasts")
	private DTOWeather addPerson(@RequestBody Location location) {
		return forecast_service.getForecasts(location);
	}

}
