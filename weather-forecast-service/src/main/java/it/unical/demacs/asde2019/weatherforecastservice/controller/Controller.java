package it.unical.demacs.asde2019.weatherforecastservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.domain.WheatherState;
import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherService;

@RestController
public class Controller {

	@Autowired
	WeatherService weatherService;
	
	@CrossOrigin
	@GetMapping("/getWheather")
	public List<WheatherState> getWheather(@RequestParam String cityName) {
		//return Arrays.asList(new Player("aaa", "aaa", 200));
		 return weatherService.getWheatherForCity(cityName).getWheatherforDays();
	}
}
