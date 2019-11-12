package it.unical.demacs.asde2019.weatherforecastservice.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.unical.demacs.asde2019.weatherforecastservice.Model.WeatherForecast;
import it.unical.demacs.asde2019.weatherforecastservice.Service.WeatherForecastService;

@RestController
public class WheaterForecastServiceController {
	
	@Autowired
	private WeatherForecastService weatherForecastService;
	
	@CrossOrigin
	@GetMapping("/getWeatherForecast")
	public WeatherForecast getWeatherForecast(@RequestParam String location_name) {
		System.out.println(location_name);
		return weatherForecastService.getWeatherForecast(location_name);
	}

}
