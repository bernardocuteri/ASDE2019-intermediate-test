/*package it.unical.demacs.asde2019.weatherforecastservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.services.WeatherService;

@RestController
public class WeatherForecastController {
	
	
	public String rende = "Today: 15 Degrees, rainy conditions, Tomorrow: 15 Degrees, rainy conditions, Day after tomorrow: 15 Degrees, rainy conditions";
	
	
	@CrossOrigin
	@GetMapping("/citySelect")
	public String citySelect(@RequestParam String location) {
		if (location.equals("Rende") || location.equals("Rome") || location.equals("Butzbach") || location.equals("Frankfurt")) {
			return WeatherService.createForecast(location);
		} else {
			return WeatherService.randomForecast();
		}
	}

}
*/